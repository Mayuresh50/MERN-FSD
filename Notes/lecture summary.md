=====================================Lecture Summary===================================



Lecture 44 : Storage and Persistence



Browser can give storage : 5-10Mb only



In Memory problem : 

&nbsp;	1. To check a user logged in or not

&nbsp;	2. You have to store in browser if it is using on ecommerce cart



Local Storage : 1. Data stored in ***key-value*** pairs 

2.Datatype should ***String*** for Key and Value.

3.Origins can be different and each origin has separate database

4.Domains, Subdomain and port are the type 



In which scenario the database persist :  on Reload, when browser reopens, Tab reopening



Deletion of Data : localstorage.clear(), localstorage.RemoveItem() and Clearing Site Setting data (Manually clearing Cache data of site)



Limitations : Can't Store bigger data (only data caan be stored 5-10mb)

It is limited to only string for storage 

When the limit exceeds then it throws an error called "***QuotaExceededError***" 

Use try-catch block for quotaexceedederror (Based on your decision)



Local Storage is synchronous in nature.

More frequent write operation will create a performance issue.



How to check if  there is a localstorage present in browser or not,  we can use == or === operators to check equality



haslocalstorage method check karna hain 



Security : We will not store any confidential information in localstorage

we can store only things that are convenient







