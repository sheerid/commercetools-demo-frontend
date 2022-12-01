fe:
	yarn && yarn build

deploy: fe
	aws s3 sync dist s3://commercetools.sheerid.com --delete
