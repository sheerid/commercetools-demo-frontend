fe:
	yarn && yarn build

deploy-gpmd: fe
	scp -i ~/.ssh/live-server.pem -r dist ubuntu@sheerid.gpmd.net:ct
#	ssh -i ~/.ssh/live-server.pem ubuntu@sheerid.gpmd.net "cd ct && "

deploy-dev: fe
	cp .env .env.local dist
	aws s3 sync dist s3://samstest.sheerid.com --delete
	aws cloudfront create-invalidation --distribution-id E27PBDNISY519 --paths "/*"

deploy: fe
	aws s3 sync dist s3://commercetools.sheerid.com --delete
