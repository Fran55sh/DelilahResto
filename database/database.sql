create database delilah

use delilah

create table users(
	id int auto_increment primary key not null,
	user_name varchar(45) not null,
	first_Name varchar(45) not null,
	last_Name varchar(45) not null,
	email varchar(45) not null,
	password varchar(45) not null,
	phone varchar(45) not null,
	address varchar(45), not null,
	is_admin bool not null default false,
)

create table products(
	id int auto_increment primary key not null,
	url_img varchar(255),
	name varchar(255) not null,
	price double not null
)

create table orders(
	id int auto_increment primary key not null,
	status_id int,
	user_id int not null,
	time date,
	total double
	pay_type_id int not null,
	foreign key (user_id) references users (id),
	foreign key (status_id) references status(id)
)

create table status(
	id int auto_increment primary key not null,
	status varchar(45)
)
 
create table placed_orders(
	order_id int not null,
	product_id  int not null,
	amount int not null,
	price double not null,
	details varchar(255),
	foreign key (order_id) references orders (id),
	foreign key (product_id)references products(id)
	
)

CREATE TABLE paytypes (
	id 	int not null primary key AUTO_INCREMENT,
	name varchar(255) not null
	foreign key (pay_type_id) references paytypes (id)
)


INSERT INTO delilah.users
(user_name, first_Name, last_Name, email, password, phone, address, is_admin)
VALUES('admin', 'Franco', 'Corvatta', 'corvattafranco@gmail.com', 'admin1234', '1234565', 'falcon79' 'true');

INSERT INTO delilah.status
(status)
VALUES('new');

INSERT INTO delilah.status
(status)
VALUES('confirmed');

INSERT INTO delilah.status
(status)
VALUES('preparing');

INSERT INTO delilah.status
(status)
VALUES('sending');

INSERT INTO delilah.status
(status)
VALUES('canceled');

INSERT INTO delilah.status
(status)
VALUES('delivered');

insert into paytypes values (null, 'casg');
insert into paytypes values (null, 'Debit Card');
insert into paytypes values (null, 'Credit Card');
insert into paytypes values (null, 'Bank Transfer');
