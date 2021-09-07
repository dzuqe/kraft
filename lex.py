import os

lines = open('./data.txt', 'r').read().split('\n')

prog_txt = ""
init_txt = "" # constructor
func_txt = "" # functions
get_txt = "" # get an item
local_txt = "" 
kill_txt = "" # closeout

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
            kill_txt += f"  App.globalPut(Bytes('{item['name']}'), App.globalGet(Bytes('{item['name']}')) + App.localGet(Int(0), Bytes('{item['name']}'))),\n"
            init_txt += f"  App.globalPut(Bytes('{item['name']}'), Int(0)),\n"
            local_txt += f"  App.localPut(Int(0), Bytes('{item['name']}'), Int(0)),\n"
            func_txt += f" {fn} = Seq([\n"
            ask_func_txt = ""
            ch_func_txt = ""
            for i in item['reqs']:
                ask_func_txt += f"  Assert(App.localGet(Int(0), Bytes('{i['name']}')) >= (Int({i['items']}) * amount)),\n"
                ch_func_txt += f"  App.localPut(Int(0), Bytes('{i['name']}'), App.localGet(Int(0), Bytes('{i['name']}')) - (Int({i['items']}) * amount)),\n"
            
            func_txt += ask_func_txt
            func_txt += ch_func_txt

            func_txt += f"  App.localPut(Int(0), Bytes('{item['name']}'), App.localGet(Int(0), Bytes('{item['name']}')) + (Int(1) * amount)),\n"
            func_txt += f"  Return(Int(1))\n"
            func_txt += f" ])\n\n"
            prog_txt += f"  [Txn.application_args[0] == Bytes('craft {item['name']}'), {fn}],\n"
    else:
        if len(line) <= 0:
            break
        key = line.split('\'')
        item = {
            'name': key[0].strip(),
            'count': key[1]
        }

        kill_txt += f"  App.globalPut(Bytes('{item['name']}'), App.globalGet(Bytes('{item['name']}')) + App.localGet(Int(0), Bytes('{item['name']}'))),\n"
        init_txt += f"  App.globalPut(Bytes('{item['name']}'), Int({item['count']})),\n"
        local_txt += f"  App.localPut(Int(0), Bytes('{item['name']}'), Int(0)),\n"

print("from pyteal import *\n")
print("def approval():")
print(" on_init = Seq([")
print("  App.globalPut(Bytes('admin'), Txn.sender()),")
print(init_txt)
print("  Return(Int(1))")
print(" ])\n")

print(" on_join = Seq([")
print(local_txt)
print("  Return(Int(1))")
print(" ])\n")

print(" on_leave = Seq([")
print("  Return(Int(1))")
print(" ])\n")

print(" is_creator = Txn.sender() == App.globalGet(Bytes('admin'))\n")
print(" amount = Btoi(Txn.application_args[1]) or 1")

print(func_txt)

print(f" name = Txn.application_args[1]")
print(f" item = App.globalGet(name)")
print(f" amount = Btoi(Txn.application_args[2])")
get_txt += f" on_get = Seq([\n"
get_txt += f"  Assert(item >= amount),\n"
get_txt += f"  Assert(item >= Int(0)),\n"
get_txt += f"  App.globalPut(name, item - amount),\n"
get_txt += f"  App.localPut(Int(0), name, App.localGet(Int(0), name) + amount),\n"
get_txt += f"  Return(Int(1)),\n"
get_txt += " ])\n\n"
print(get_txt)

print(" return Cond(")
print("  [Txn.application_id() == Int(0), on_init],")
print("  [Txn.on_completion() == OnComplete.DeleteApplication, Return(is_creator)],")
print("  [Txn.on_completion() == OnComplete.UpdateApplication, Return(is_creator)],")
print("  [Txn.on_completion() == OnComplete.OptIn, on_join],")
print("  [Txn.on_completion() == OnComplete.CloseOut, on_leave],")
prog_txt += f"  [Txn.application_args[0] == Bytes('get'), on_get],\n"
print(prog_txt)
print(" )\n")

print("def clear():")
print("    return Seq([Return(Int(1))])\n")
print("if __name__ == '__main__':")
print("    with open('game.teal', 'w') as f:")
print("        compiled = compileTeal(approval(), mode=Mode.Application, version=2)")
print("        f.write(compiled)")
print("    with open('clear.teal', 'w') as f:")
print("        compiled = compileTeal(clear(), mode=Mode.Application, version=2)")
print("        f.write(compiled)")
