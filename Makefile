all: teal

teal:
	python lex.py > contract.py
	python contract.py
