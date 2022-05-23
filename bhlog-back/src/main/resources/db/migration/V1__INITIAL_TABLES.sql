CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

CREATE TABLE "user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name varchar(60),
    username varchar(30),
    password varchar(100)
);

ALTER TABLE "user" ADD CONSTRAINT user_pkey PRIMARY KEY (id);

CREATE TABLE "post" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title varchar(90),
    content text,
    created_at timestamp without time zone,
    "user_id" uuid
);

ALTER TABLE "post" ADD CONSTRAINT post_pkey PRIMARY KEY (id);

ALTER TABLE "post"
    ADD CONSTRAINT post_fk_1 FOREIGN KEY ("user_id") REFERENCES "user"(id) ON DELETE CASCADE;


CREATE TABLE "comment" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    content text,
    created_at timestamp without time zone,
    "user_id" uuid,
    "post_id" uuid
);

ALTER TABLE "comment" ADD CONSTRAINT comment_pkey PRIMARY KEY (id);

ALTER TABLE "comment"
    ADD CONSTRAINT comment_fk_1 FOREIGN KEY ("user_id") REFERENCES "user"(id) ON DELETE CASCADE;
ALTER TABLE "comment"
    ADD CONSTRAINT comment_fk_2 FOREIGN KEY ("post_id") REFERENCES post(id) ON DELETE CASCADE;


CREATE TABLE "photo_album" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title varchar(90),
    "description" varchar(200),
    "user_id" uuid
);

ALTER TABLE "photo_album" ADD CONSTRAINT photo_album_pkey PRIMARY KEY (id);

ALTER TABLE "photo_album"
    ADD CONSTRAINT photo_album_fk_1 FOREIGN KEY ("user_id") REFERENCES "user"(id) ON DELETE CASCADE;

CREATE TABLE "photo" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title varchar(90),
    "description" varchar(200),
    content text,
    created_at timestamp without time zone,
    "photo_album_id" uuid
);

ALTER TABLE "photo" ADD CONSTRAINT photo_pkey PRIMARY KEY (id);

ALTER TABLE "photo"
    ADD CONSTRAINT photo_fk_1 FOREIGN KEY ("photo_album_id") REFERENCES photo_album(id) ON DELETE CASCADE;