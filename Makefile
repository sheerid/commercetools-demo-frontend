fe:
	yarn && yarn build

deploy-dev: fe
	aws s3 sync dist s3://samstest.sheerid.com --delete

deploy: fe
	aws s3 sync dist s3://commercetools.sheerid.com --delete
