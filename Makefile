fe:
	yarn && yarn build

deploy: fe
	scp -rC dist sheerid.gpmd.net:ct/
