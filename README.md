## Application carrying information for New users

1) This is an application built using `create-react-app`
2) It carries basic information about the voilk project
3) It also is an account creator application, which uses `voilkGraph`

## You can run it locally if you want

Clone the project, and use `npm install` then run `npm start` to run in dev mode

or you can also build it for production `npm run build`
and host it on a server

there is a server.js file include, which is going to help you run it on a port
then using `nginx` you can configure it with your domain.

```
server {
	listen 80;
	listen [::]:80;

	server_name landing.voilk.com signup.voilk.com register.voilk.com;
	location / {
		proxy_pass http://127.0.0.1:8081;
    }
}
```

use certbot to install a certificate and run it on `https`

```
certbot --nginx -d landing.voilk.com -d signup.voilk.com -d register.voilk.com
```
