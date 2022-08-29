/**
 * Feel free to change the username as well as the password given to it
 */
CREATE USER 'root' IDENTIFIED BY 'password';

/* In an ideal world, we should strictly provide the grants the API has access
 * to a specific table rather than all the privileges.
 */
GRANT ALL PRIVILEGES ON savitriya.shop TO 'root'@'localhost';

flush privileges;
