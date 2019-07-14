DO $$
DECLARE
		tt uuid;
BEGIN
	FOR counter IN 1..10 LOOP
		tt = uuid_generate_v4();
 		RAISE NOTICE 'Counter: % >> %', counter, tt;
	END LOOP;
END; $$