import os

lines = open('./data.txt', 'r').read().split('\n')

prog_txt = ""
init_txt = ""
func_txt = ""
get_txt = ""
local_txt = ""

for line in lines:
    if line.find(':') > 0:
        key = line.split(':')
        if key[1].find(',') > 0:
            _items = key[1].split(',')
            items = []
            for it in _items:
                _its = it.split('\'')
                _it = {
                    'name': _its[0].strip(),
                    'items': _its[1]
                }
                items.append(_it)

            item = {
                'name': key[0].strip(),
                'reqs': items
            }
            fn = f"has_{item['name'].replace(' ', '_')}_reqs"
            init_txt += f"\t\tApp.globalPut(Bytes('{item['name']}'), Int(0)),\n"
            local_txt += f"\t\tApp.localPut(Int(0), Bytes('{item['name']}'), Int(0)),\n"
            func_txt += f"\t{fn} = Seq([\n"
            ask_func_txt = "\t\tIf(And(\n"
            ch_func_txt = ""
            counter = 0
            for i in item['reqs']:
                char = ""
                if counter == len(item['reqs']) - 1: 
                    char = ")"
                ask_func_txt += f"\t\t\tApp.localGet(Int(0), Bytes('{i['name']}')) >= Int({i['items']}){char},\n"
                ch_func_txt += f"\t\tApp.localPut(Int(0), Bytes('{i['name']}'), App.localGet(Int(0), Bytes('{i['name']}')) - Int({i['items']})),\n"
                counter += 1
            ask_func_txt += "\t\t\tReturn(Int(1))\n"
            ask_func_txt += "\t\t),\n"
            
            func_txt += ask_func_txt
            func_txt += ch_func_txt

            func_txt += f"\t\tApp.localPut(Int(0), Bytes('{item['name']}'), App.localGet(Int(0), Bytes('{item['name']}')) + Int(1)),\n"
            func_txt += f"\t\tReturn(Int(1))\n"
            func_txt += f"\t])\n\n"
            prog_txt += f"\t\t[Txn.application_args[0] == Bytes('craft {item['name']}'), {fn}],\n"
    else:
        if len(line) <= 0:
            break
        key = line.split('\'')
        item = {
            'name': key[0].strip(),
            'count': key[1]
        }

        init_txt += f"\t\tApp.globalPut(Bytes('{item['name']}'), Int({item['count']})),\n"
        local_txt += f"\t\tApp.localPut(Int(0), Bytes('{item['name']}'), Int(0)),\n"

print("from pyteal import *\n")
print("def approval():")
print("\ton_init = Seq([")
print("\t\tApp.globalPut(Bytes('admin'), Txn.sender()),")
print(init_txt)
print("\t\tReturn(Int(1))")
print("\t])\n")

print("\ton_join = Seq([")
print(local_txt)
print("\t\tReturn(Int(1))")
print("\t])\n")

print("\ton_leave = Seq([")
print("\t\tReturn(Int(1))")
print("\t])\n")

print("\tis_creator = Txn.sender() == App.globalGet(Bytes('admin'))\n")

print(func_txt)

print(f"\tname = Bytes(str(Txn.application_args[1]))")
print(f"\tamount = Btoi(Txn.application_args[2])\n")

get_txt += f"\ton_get = Seq([\n"
get_txt += f"\t\tIf(App.globalGet(name) >= amount, Return(Int(1))),\n"
get_txt += f"\t\tApp.globalPut(name, App.globalGet(name) - amount),\n"
get_txt += f"\t\tApp.localPut(Int(0), name, App.localGet(Int(0), name) + amount),\n"
get_txt += f"\t\tReturn(Int(1)),\n"
get_txt += "\t])\n\n"
print(get_txt)

print("\treturn Cond(")
print("\t\t[Txn.application_id() == Int(0), on_init],")
print("\t\t[Txn.on_completion() == OnComplete.DeleteApplication, Return(is_creator)],")
print("\t\t[Txn.on_completion() == OnComplete.UpdateApplication, Return(is_creator)],")
print("\t\t[Txn.on_completion() == OnComplete.OptIn, on_join],")
print("\t\t[Txn.on_completion() == OnComplete.CloseOut, on_leave],")
prog_txt += f"\t\t[Txn.application_args[0] == Bytes('get'), on_get],\n"
print(prog_txt)
print("\t)\n")

print("def clear():")
print("    return Seq([Return(Int(1))])\n")
print("if __name__ == '__main__':")
print("    with open('game.teal', 'w') as f:")
print("        compiled = compileTeal(approval(), mode=Mode.Application, version=2)")
print("        f.write(compiled)")
print("    with open('clear.teal', 'w') as f:")
print("        compiled = compileTeal(clear(), mode=Mode.Application, version=2)")
print("        f.write(compiled)")
