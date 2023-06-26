INSERT INTO "Person" ("Id", "FirstName", "LastName", "Phone", "Email", "CreatedAt", "UpdatedAt", "IsActive", "UpdatedBy")
VALUES
  ('32883a8f-06be-4858-83f8-3103ca8d4a42', 'Emily', 'Johnson', '5555555555', 'emily.johnson@example.com', NOW(), NOW(), true, '32883a8f-06be-4858-83f8-3103ca8d4a42'),
  ('30271a01-2bf6-40de-a180-937fe169f7bf', 'David', 'Wilson', '1234567890', 'david.wilson@example.com', NOW(), NOW(), true, '30271a01-2bf6-40de-a180-937fe169f7bf'),
  ('9e0e5597-40b3-4d30-806a-4817d2f99944', 'Olivia', 'Smith', '9876543210', 'olivia.smith@example.com', NOW(), NOW(), true, '9e0e5597-40b3-4d30-806a-4817d2f99944'),
  ('8c09d3df-fa10-4cad-b7af-2a46029886ef', 'Daniel', 'Brown', '5555555555', 'daniel.brown@example.com', NOW(), NOW(), true, '8c09d3df-fa10-4cad-b7af-2a46029886ef'),
  ('b8221560-9ca8-4e84-8f4d-85c42ccece8f', 'Sophia', 'Davis', '1234567890', 'sophia.davis@example.com', NOW(), NOW(), true, 'b8221560-9ca8-4e84-8f4d-85c42ccece8f'),
  ('c3aa2a29-99fe-4ff4-af66-ea97c9091c61', 'James', 'Johnson', '9876543210', 'james.johnson@example.com', NOW(), NOW(), true, 'c3aa2a29-99fe-4ff4-af66-ea97c9091c61');

 INSERT INTO "User" ("Id", "Username", "Password", "RoleId","PersonId", "CreatedAt", "UpdatedAt", "IsActive", "UpdatedBy")
VALUES
  ('8d88d8e0-6639-4a85-9c84-881344f1e2e2', 'emily.j', 'password123', '4b1e7207-97b1-4a8b-a20e-96b073a58167','32883a8f-06be-4858-83f8-3103ca8d4a42', NOW(), NOW(), true,  '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('65f74a16-0b44-43a7-a16f-1c032aa7d6b9', 'david.w', 'password456', '4b1e7207-97b1-4a8b-a20e-96b073a58167','30271a01-2bf6-40de-a180-937fe169f7bf', NOW(), NOW(), true,  '65f74a16-0b44-43a7-a16f-1c032aa7d6b9'),
  ('05c4d065-4803-42a3-9b48-fb3f89457d42', 'olivia.s', 'password789', '1c4d0654-8034-42a3-9b48-fb3f89457d44','9e0e5597-40b3-4d30-806a-4817d2f99944', NOW(), NOW(), true,  '05c4d065-4803-42a3-9b48-fb3f89457d42'),
  ('65f74a16-0b44-43a7-a16f-1c032aa7d6b9', 'daniel.b', 'password456', '6f74a160-0b44-43a7-a16f-1c032aa7d6bb','b8221560-9ca8-4e84-8f4d-85c42ccece8f', NOW(), NOW(), true,  '65f74a16-0b44-43a7-a16f-1c032aa7d6b9'),
  ('65f74a16-0b44-43a7-a16f-1c032aa7d6b9', 'sophia9d.', 'password456', '6f74a160-0b44-43a7-a16f-1c032aa7d6bb','b8221560-9ca8-4e84-8f4d-85c42ccece8f', NOW(), NOW(), true,  '65f74a16-0b44-43a7-a16f-1c032aa7d6b9'),
  ('65f74a16-0b44-43a7-a16f-1c032aa7d6b9', 'james.bondJ.w', 'password456', '6f74a160-0b44-43a7-a16f-1c032aa7d6bb','c3aa2a29-99fe-4ff4-af66-ea97c9091c61', NOW(), NOW(), true,  '84794762-a38c-479d-874f-d863ba265a05'),

  INSERT INTO "Role" ("Id", "Title", "CreatedAt", "UpdatedAt", "IsActive", "CreatedBy", "UpdatedBy")
VALUES
  ('4b1e7207-97b1-4a8b-a20e-96b073a58167', 'Admin', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('1c4d0654-8034-42a3-9b48-fb3f89457d44', 'Manager', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('6f74a160-0b44-43a7-a16f-1c032aa7d6bb', 'Customer', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2');

 
 INSERT INTO "Address" ("Id", "StreetName", "StreetNumber", "City", "Zipcode", "PersonId", "CreatedAt", "UpdatedAt", "IsActive", "CreatedBy", "UpdatedBy")
VALUES
  ('bf2084c5-ec85-473a-9ccb-43d9875f1947', 'Main Street', '123', 'New York', 12345, '32883a8f-06be-4858-83f8-3103ca8d4a42', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e1', '8d88d8e0-6639-4a85-9c84-881344f1e2e1'),
  ('9cdef467-072c-423f-9f3b-e21ee051ff03', 'Oak Avenue', '456', 'Los Angeles', 54321, '65f74a16-0b44-43a7-a16f-1c032aa7d6b8', NOW(), NOW(), true, '65f74a16-0b44-43a7-a16f-1c032aa7d6b8', '65f74a16-0b44-43a7-a16f-1c032aa7d6b8'),
  ('50798aa9-d5a1-42ea-b109-03b760f332ed', 'Maple Street', '789', 'Chicago', 98765, '05c4d065-4803-42a3-9b48-fb3f89457d46', NOW(), NOW(), true, '05c4d065-4803-42a3-9b48-fb3f89457d46', '05c4d065-4803-42a3-9b48-fb3f89457d46'),
  ('bb0ab60a-7847-43a7-9b85-86adc8ff1a34', 'Cedar Lane', '234', 'Seattle', 54321, 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465', NOW(), NOW(), true, 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465', 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465'),
  ('aa45130d-4be2-40c2-8898-ca5e0273ddf0', 'Elm Street', '567', 'San Francisco', 12345, 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', NOW(), NOW(), true, 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef');
 
 INSERT INTO "Address" ("Id", "StreetName", "StreetNumber", "City", "Zipcode", "PersonId", "CreatedAt", "UpdatedAt", "IsActive", "CreatedBy", "UpdatedBy")
VALUES
/* 
('8d88d8e0-6639-4a85-9c84-881344f1e2e1', 'Main Street', '123', 'New York', 12345, '8d88d8e0-6639-4a85-9c84-881344f1e2e1', NOW(), NOW(), true, 'd9040b2c-c47f-4ed7-9794-189f26f5f534', 'd9040b2c-c47f-4ed7-9794-189f26f5f534'),
  ('65f74a16-0b44-43a7-a16f-1c032aa7d6b8', 'Oak Avenue', '456', 'Los Angeles', 54321, '65f74a16-0b44-43a7-a16f-1c032aa7d6b8', NOW(), NOW(), true, '84794762-a38c-479d-874f-d863ba265a05', '84794762-a38c-479d-874f-d863ba265a05'),
  ('05c4d065-4803-42a3-9b48-fb3f89457d46', 'Maple Street', '789', 'Chicago', 98765, '05c4d065-4803-42a3-9b48-fb3f89457d46', NOW(), NOW(), true, '05c4d065-4803-42a3-9b48-fb3f89457d46', '05c4d065-4803-42a3-9b48-fb3f89457d46'),
  ('e7ba40a2-3b84-4b8a-ba09-55d8897f6465', 'Cedar Lane', '234', 'Seattle', 54321, 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465', NOW(), NOW(), true, 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465', 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465'),
  ('f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', 'Elm Street', '567', 'San Francisco', 12345, 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', NOW(), NOW(), true, 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef');
*/
('50e3101b-6441-41ce-a9b8-cf4c21de72c1', 'Main Street', '123', 'New York', 12345, '8d88d8e0-6639-4a85-9c84-881344f1e2e1', NOW(), NOW(), true, 'd9040b2c-c47f-4ed7-9794-189f26f5f534', 'd9040b2c-c47f-4ed7-9794-189f26f5f534'),
  ('65f74a16-0b44-43a7-a16f-1c032aa7d6b8', 'Oak Avenue', '456', 'Los Angeles', 54321, '65f74a16-0b44-43a7-a16f-1c032aa7d6b8', NOW(), NOW(), true, '84794762-a38c-479d-874f-d863ba265a05', '84794762-a38c-479d-874f-d863ba265a05'),
  ('05c4d065-4803-42a3-9b48-fb3f89457d46', 'Maple Street', '789', 'Chicago', 98765, '05c4d065-4803-42a3-9b48-fb3f89457d46', NOW(), NOW(), true, '05c4d065-4803-42a3-9b48-fb3f89457d46', '05c4d065-4803-42a3-9b48-fb3f89457d46'),
  ('e7ba40a2-3b84-4b8a-ba09-55d8897f6465', 'Cedar Lane', '234', 'Seattle', 54321, 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465', NOW(), NOW(), true, 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465', 'e7ba40a2-3b84-4b8a-ba09-55d8897f6465'),
  ('f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', 'Elm Street', '567', 'San Francisco', 12345, 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', NOW(), NOW(), true, 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', 'f61b31b9-8f34-40de-8c46-7cc2a0edc8ef');
*/



  INSERT INTO "Role" ("Id", "Title", "CreatedAt", "UpdatedAt", "IsActive", "CreatedBy", "UpdatedBy")
VALUES
  ('4b1e7207-97b1-4a8b-a20e-96b073a58167', 'Admin', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('1c4d0654-8034-42a3-9b48-fb3f89457d44', 'Manager', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('6f74a160-0b44-43a7-a16f-1c032aa7d6bb', 'Customer', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2');

 
INSERT INTO "Product" ("Id", "Name", "Price", "Quantity", "CategoryId", "CreatedAt", "UpdatedAt", "IsActive", "CreatedBy", "UpdatedBy")
VALUES
  ('4b1e7207-97b1-4a8b-a20e-96b073a58166', 'Laptop', 999.99, 10, '4b1e7207-97b1-4a8b-a20e-96b073a58165', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('1c4d0654-8034-42a3-9b48-fb3f89457d43', 'Smartphone', 19.99, 50, '1c4d0654-8034-42a3-9b48-fb3f89457d42', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('6f74a160-0b44-43a7-a16f-1c032aa7d6ba', 'TV', 199.99, 5, '6f74a160-0b44-43a7-a16f-1c032aa7d6b9', NOW(), NOW(), true, '65f74a16-0b44-43a7-a16f-1c032aa7d6b9', '65f74a16-0b44-43a7-a16f-1c032aa7d6b9'),
  ('1c4d0654-8034-42a3-9b48-fb3f89457d49', 'Printer', 9.99, 20, '1c4d0654-8034-42a3-9b48-fb3f89457d48', NOW(), NOW(), true, '65f74a16-0b44-43a7-a16f-1c032aa7d6b9', '65f74a16-0b44-43a7-a16f-1c032aa7d6b9'),
  ('f61b31b9-8f34-40de-8c46-7cc2a0edc8e6', 'Tablet', 14.99, 30, 'f61b31b9-8f34-40de-8c46-7cc2a0edc8e5', NOW(), NOW(), true, '65f74a16-0b44-43a7-a16f-1c032aa7d6b9', '65f74a16-0b44-43a7-a16f-1c032aa7d6b9');
 
 select * from "Person" p 
 

INSERT INTO "ProductOrder" ("Id", "ProductId", "OrderId", "ProductQuantity")
values
     ('fcb37203-1e10-4cb7-ba7c-2f4b836b8b49','1c4d0654-8034-42a3-9b48-fb3f89457d43','9ad830a9-20a5-4c2c-9d3d-abb2f7b32cc1',6),
	 ('b823ecf9-691e-473b-b599-81ccb5163573','1c4d0654-8034-42a3-9b48-fb3f89457d49','9ad830a9-20a5-4c2c-9d3d-abb2f7b32cc1',2),
	 ('e0d9710d-3933-4b12-905b-9af76f20bf07','f61b31b9-8f34-40de-8c46-7cc2a0edc8e6','9ad830a9-20a5-4c2c-9d3d-abb2f7b32cc1',1),
  ('6d8f4a67-1d95-4e09-bb5e-95b57dcd3921', '4b1e7207-97b1-4a8b-a20e-96b073a58166', '9ad830a9-20a5-4c2c-9d3d-abb2f7b32cc1', 2),
  ('d162c7b7-08a6-4cbe-9d66-8d27de897731', '1c4d0654-8034-42a3-9b48-fb3f89457d43', '9ad830a9-20a5-4c2c-9d3d-abb2f7b32cc1', 3),
  ('92a46f94-782b-4ce9-92fe-b3e5ffed70b2', '6f74a160-0b44-43a7-a16f-1c032aa7d6ba', 'f7854e1f-3ee5-4c52-a9f5-6d7a9e74c79b', 1),
  ('3ef4c7af-9a95-4da8-829f-72652d76f890', '1c4d0654-8034-42a3-9b48-fb3f89457d49', 'f7854e1f-3ee5-4c52-a9f5-6d7a9e74c79b', 2),
  ('7d5ef8f6-5bfa-45ce-8b5f-9ddcb52b10b0', 'f61b31b9-8f34-40de-8c46-7cc2a0edc8e6', 'f7854e1f-3ee5-4c52-a9f5-6d7a9e74c79b', 1),
  ('ef89187d-34f3-4d07-874d-5e9d680e2c4b', '6f74a160-0b44-43a7-a16f-1c032aa7d6ba', 'f7854e1f-3ee5-4c52-a9f5-6d7a9e74c79b', 2);

 
 INSERT INTO "Person" ("Id", "FirstName", "LastName", "Phone", "Email", "CreatedAt", "UpdatedAt", "IsActive")
values
 ('55a9cbbb-99e4-42ae-a5d0-d41340ea0358','Marko','Markić', '0989874562','marko.markic@gmail.com', NOW(), NOW(), true)
    ('56447b47-4edb-4d08-a688-2ce23c4fafd2', 'Glupkan', 'Glupko', '+38595654789', 'dummy.data@glupky.com', NOW(),NOW(),true),
  ('65f74a16-0b44-43a7-a16f-1c032aa7d6b8', 'Jane', 'Smith', '9876543210', 'jane.smith@example.com', NOW(), NOW(), true),
  ('05c4d065-4803-42a3-9b48-fb3f89457d46', 'Michael', 'Johnson', '5555555555', 'michael.johnson@example.com', NOW(), NOW(), true),
  ('e7ba40a2-3b84-4b8a-ba09-55d8897f6465', 'Sarah', 'Williams', '9876543210', 'sarah.williams@example.com', NOW(), NOW(), true),
  ('f61b31b9-8f34-40de-8c46-7cc2a0edc8ef', 'Robert', 'Brown', '1234567890', 'robert.brown@example.com', NOW(), NOW(), true),
  ('e0e5dca9-238e-4c5a-ae3a-530d23d4d0e7', 'Jane', 'Smith', '1234567890', 'jane.smith@example.com', NOW(), NOW(), true),
 
  
   INSERT INTO "Order" ("Id", "PersonId", "TotalPrice", "ShippingAddressId", "BillingAddressId", "CreatedAt", "UpdatedAt", "IsActive", "CreatedBy", "UpdatedBy")
VALUES
  ('9ad830a9-20a5-4c2c-9d3d-abb2f7b32cc1', '56447b47-4edb-4d08-a688-2ce23c4fafd2', 100.00, 'a3372ea0-076e-4498-a52e-07efa55f6ea6', 'ae0607b6-2155-4efb-b899-bb56b0d50e68', NOW(), NOW(), true, 'd9040b2c-c47f-4ed7-9794-189f26f5f534', 'd9040b2c-c47f-4ed7-9794-189f26f5f534'),
  ('f7854e1f-3ee5-4c52-a9f5-6d7a9e74c79b', '56447b47-4edb-4d08-a688-2ce23c4fafd2', 200.00, 'a3372ea0-076e-4498-a52e-07efa55f6ea6', 'ae0607b6-2155-4efb-b899-bb56b0d50e68', NOW(), NOW(), true, 'd9040b2c-c47f-4ed7-9794-189f26f5f534', 'd9040b2c-c47f-4ed7-9794-189f26f5f534'),
  ('4b1e7207-97b1-4a8b-a20e-96b073a58166', '56447b47-4edb-4d08-a688-2ce23c4fafd2', 150.00, 'a3372ea0-076e-4498-a52e-07efa55f6ea6', 'a3372ea0-076e-4498-a52e-07efa55f6ea6', NOW(), NOW(), true, 'd9040b2c-c47f-4ed7-9794-189f26f5f534', '65f74a16-0b44-43a7-a16f-1c032aa7d6b9'),
  ('1c4d0654-8034-42a3-9b48-fb3f89457d43', '55a9cbbb-99e4-42ae-a5d0-d41340ea0358', 75.00, '46b8b952-9808-43c8-abe2-223297ae83ba', 'a70088c0-8a88-44a6-8f12-8a8dc27df1bf', NOW(), NOW(), true, '106ad5a0-4c26-41f1-bac8-d49ac3deb38f', '106ad5a0-4c26-41f1-bac8-d49ac3deb38f'),
  ('6f74a160-0b44-43a7-a16f-1c032aa7d6ba', '55a9cbbb-99e4-42ae-a5d0-d41340ea0358', 300.00, '46b8b952-9808-43c8-abe2-223297ae83ba', 'a70088c0-8a88-44a6-8f12-8a8dc27df1bf', NOW(), NOW(), true, '106ad5a0-4c26-41f1-bac8-d49ac3deb38f', '106ad5a0-4c26-41f1-bac8-d49ac3deb38f');
 
 
INSERT INTO "Category" ("Id", "Title", "CreatedAt", "UpdatedAt", "IsActive", "CreatedBy", "UpdatedBy")
VALUES
  ('4b1e7207-97b1-4a8b-a20e-96b073a58165', 'TV', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2', '8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('1c4d0654-8034-42a3-9b48-fb3f89457d42', 'Mobile', NOW(), NOW(), true, '8d88d8e0-6639-4a85-9c84-881344f1e2e2','8d88d8e0-6639-4a85-9c84-881344f1e2e2'),
  ('6f74a160-0b44-43a7-a16f-1c032aa7d6b9', 'Printer', NOW(), NOW(), true, '65f74a16-0b44-43a7-a16f-1c032aa7d6b9', '65f74a16-0b44-43a7-a16f-1c032aa7d6b9'),
  ('1c4d0654-8034-42a3-9b48-fb3f89457d48', 'Ruter', NOW(), NOW(), true, '05c4d065-4803-42a3-9b48-fb3f89457d42', '05c4d065-4803-42a3-9b48-fb3f89457d42'),
  ('f61b31b9-8f34-40de-8c46-7cc2a0edc8e5', 'Smartwatch', NOW(), NOW(), true, '05c4d065-4803-42a3-9b48-fb3f89457d42', '05c4d065-4803-42a3-9b48-fb3f89457d42');

 
 
 
 
 
 
 
 
 
 
 
 
  alter table "ProductOrder" rename column "ProductQty" to "ProductQuantity";
alter table "Order" rename column "ShippingAddress" to "ShippingAddressId";
alter table "Order" rename column "BillingAddress" to "BillingAddressId";

select * from "Person" p;
select  * from "Product" p ;
select * from "User" u ;
select * from "ProductOrder" po ;
select * from "Order" o ;
select  * from "Role" r ;

select 

SELECT p."Id", p."Name", c."Title", p."Price", p."Quantity", 
p."CategoryId", p."CreatedAt", p."UpdatedAt", p."IsActive",
p."CreatedBy", p."UpdatedBy" , per."FirstName", per."LastName"
FROM "Product" p 
JOIN "Category" c ON p."CategoryId" = c."Id"
JOIN "ProductOrder" po ON po."ProductId" = p."Id"
JOIN "Order" o ON o."Id" = po."OrderId"
JOIN "Person" per ON per."Id" = o."PersonId"¸

create table "Role" (
    "Id" uuid primary key,
    "Title" varchar(255) not null,
    "CreatedAt" timestamp,
    "UpdatedAt" timestamp,
    "IsActive" bool,
    "CreatedBy" uuid,
    "UpdatedBy" uuid
);

alter table "Role"
add constraint "FK_Role_User_UpdatedByUserId" foreign key("UpdatedBy") references "User"("Id");

alter table "Person"
add constraint "FK_Person_User_UpdatedByUserId" foreign key("UpdatedBy") references "User"("Id");





SELECT
  p."Id",
  p."Name",
  c."Title",
  p."Price",
  p."Quantity",
  p."CategoryId",
  p."CreatedAt",
  p."UpdatedAt",
  p."IsActive",
  p."CreatedBy",
  p."UpdatedBy",
  per."FirstName",
  per."LastName"
FROM
  "Product" p
 JOIN
  "Category" c ON p."CategoryId" = c."Id"
JOIN
  "ProductOrder" po ON po."ProductId" = p."Id"
JOIN
  "Order" o ON o."Id" = po."OrderId"
 left JOIN
  "Person" per ON per."Id" = o."PersonId";
  
 
 drop database technoshop