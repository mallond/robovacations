
-- Drop and Insert

DROP TABLE rate_books CASCADE ;

create table rate_books
(
	state varchar(2) not null,
	name varchar(25) not null,
	effective date not null,
	version version_type,
	id varchar(25) not null,
	program_name varchar(25),
	ratebook_bin bytea,
	ratebook_name varchar(25),
	constraint rate_books_state_name_effective_pk
		primary key (state, name, effective)
);



create unique index rate_books_state_uindex
	on rate_books (state);

create unique index rate_books_name_uindex
	on rate_books (name);

create unique index rate_books_id_uindex
	on rate_books (id);

-- Header
INSERT INTO public.rate_books (state, name, effective, version, id, program_name, ratebook_bin, ratebook_name) VALUES ('FL', 'APEX_20170101', '2017-11-14', 'Pending', '1', 'APEX', null, 'rate_book_name.xslx');



DROP TABLE rate_charts CASCADE ;

create table rate_charts
(
	id varchar(25) not null
		constraint rate_charts_rate_books_id_fk
			references rate_books (id)
				on update cascade on delete cascade,
	table_name varchar(25) not null,
	bucket_key varchar(25) not null,
	factor varchar(25),
	factor_type factor_type,
	bucket_key_map varchar(25),
	constraint rate_charts_id_table_name_bucket_key_pk
		primary key (id, table_name, bucket_key)
);






-- Detail
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '01/01', '1.01', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '01/02', '1.02', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '02/01/01', '1.01', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '01/03', '1.03', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '01/04', '1.04', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'FirstTable', '01/01', '55', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '02/01/02', '1.01', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '02/04', '1.04', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '02/01', '1.01', 'Decimal', 'age/status/gender');
INSERT INTO public.rate_charts (id, table_name, bucket_key, factor, factor_type, bucket_key_map) VALUES ('1', 'SecondTable', '02/01/03', '1.01', 'Decimal', 'age/status/gender');

SELECT * FROM rate_books ORDER BY NAME;

DROP TABLE rate_books;

-- Extract from by Primary Key

SELECT
  rate_books.state,
  rate_books.name,
  rate_books.effective,
  rate_books.version,
  rate_books.id,
  rate_books.program_name,
  rate_books.ratebook_bin,
  rate_books.ratebook_name,
  rate_charts.table_name,
  rate_charts.bucket_key,
  rate_charts.factor,
  rate_charts.factor_type,
  rate_charts.bucket_key_map
FROM rate_books, rate_charts
WHERE state='FL' AND name = 'APEX_20170101' AND effective='2017-11-14' AND program_name='APEX';


-- Extract from by Primary Key + Table

SELECT
  rate_books.state,
  rate_books.name,
  rate_books.effective,
  rate_books.version,
  rate_books.id,
  rate_books.program_name,
  rate_books.ratebook_bin,
  rate_books.ratebook_name,
  rate_charts.table_name,
  rate_charts.bucket_key,
  rate_charts.factor,
  rate_charts.factor_type
FROM rate_books, rate_charts
WHERE state='FL' AND name = 'APEX_20170101' AND effective='2017-11-14' AND program_name='APEX' AND table_name='SecondTable';

-- Extract from by Primary Key + Table + bucket_key

SELECT
  rate_books.state,
  rate_books.name,
  rate_books.effective,
  rate_books.version,
  rate_books.id,
  rate_books.program_name,
  rate_books.ratebook_bin,
  rate_books.ratebook_name,
  rate_charts.table_name,
  rate_charts.bucket_key,
  rate_charts.factor,
  rate_charts.factor_type
FROM rate_books, rate_charts
WHERE state='FL' AND name = 'APEX_20170101' AND effective='2017-11-14' AND program_name='APEX' AND table_name='SecondTable' AND bucket_key='01/01';


-- Extract from by Primary Key + Table + LIKE bucket_key
SELECT
  rate_books.state,
  rate_books.name,
  rate_books.effective,
  rate_books.version,
  rate_books.id,
  rate_books.program_name,
  rate_books.ratebook_bin,
  rate_books.ratebook_name,
  rate_charts.table_name,
  rate_charts.bucket_key,
  rate_charts.factor,
  rate_charts.factor_type
FROM rate_books, rate_charts
WHERE state='FL' AND name = 'APEX_20170101' AND effective='2017-11-14' AND program_name='APEX' AND table_name='SecondTable' AND bucket_key LIKE '02/01/%';