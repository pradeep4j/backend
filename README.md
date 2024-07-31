Deploying a Node JS application via a Jenkins CI/CD pipeline on an AWS EC2 instance with Ubuntu OS involves several steps. Below is a detailed guide to help you through the process:
Prerequisites
1.	AWS EC2 instance with Ubuntu OS with Elastic IP(Static IP – Public IP would be changed if instance will be stopped, eleastic IP cannot be changed even though the instance is stopped)
2.	Jenkins installed on your local machine or another server. 
Before installing Jenkins we must have to install JDK 17 using following link for both Jenkins and JDK17
https://www.jenkins.io/doc/book/installing/linux/#debianubuntu
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install Jenkins
Start Jenkins – user – admin password - watermark
You can enable the Jenkins service to start at boot with the command:
sudo systemctl enable jenkins
You can start the Jenkins service with the command:
sudo systemctl start jenkins
You can check the status of the Jenkins service using the command:
sudo systemctl status jenkins

cat /var/lib/jenkins/secrets/initialAdminPassword
Administrator password - 664f7024dc2c4ce8b49cf751da6b50a4
3.	GitHub repository containing your nodejs application.
4.	Open Jenkins and create new build as nodejs application
5.	Source code is on git https://github.com/pradeep4j/backend.git
6.	Since repository is public so no credentials are required.
7.	Go to workspace
8.	See all code of git must be matched with workspace code
9.	Copy path 
Building in workspace /var/lib/jenkins/workspace/nodejs from Console output
10.	Copy all code from 

/var/lib/jenkins/workspace/nodejs to /var/www/nodeapp folder for this create a new directory under /bar/www as nodeaap
11.	Now click on configure Jenkins left menu and select build steps execute shell and write there
cp –r * /var/www/nodeapp
cd /var/www/nodeapp
pkill -f “index.js” && echo “node.js processed successfully!”
nohup npm start
If error cp: cannot create regular file '/var/www/nodeapp/index.js': Permission denied cp: cannot create regular file '/var/www/nodeapp/package-lock.json': Permission denied cp: cannot create regular file '/var/www/nodeapp/package.json': Permission denied Build step 'Execute shell' marked build as failure
Run
sudo chown jenkins:jenkins /var/www/nodeapp
sudo chmod -R 0755 /var/www/nodeapp
check sudo lsof –I :80
kill all http running for this run 
sudo kill PID
12.	Now run sudo npm I and then npm start
13.	Create webhook for auto deployment
         Install plugin Generic Webhook Trigger and git server and GitHub IntegrationVersionfrom manage plugin and then plugin 
Goto your github where code is placed and Cleick on settings->select webhook and create a webhook. It will ask for a path give the path as
http://13.235.163.49:8080/gituhub-webhook/ with type application/json


