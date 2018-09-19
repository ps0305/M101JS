What are the reasons ,why an application and the server was reset after the server received a write but before a response could be sent.

* The network TCP connection between the application and the server was reset after the server received a write but before a response could be sent.

* The MongoDB server terminates between receiving the write and responding to it.

* The Network fails between the time of the write and the time the client receives a response to the write.
