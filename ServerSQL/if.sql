DO $$
DECLARE
	ran bigint;
	rdata bigint;
BEGIN
	ran = random() * 10 ^ 16;
	--SELECT * INTO rdata FROM public.lock WHERE "user" = ran;
	RAISE NOTICE 'int: % id: %', ran, rdata;
	IF rdata IS NULL THEN
		INSERT INTO public.lock(
			id, "user", date)
			VALUES (333226, ran, current_timestamp);
	END IF;
	
END; $$

