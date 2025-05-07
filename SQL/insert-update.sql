INSERT INTO 학과
	-- VALUE('영어인문학과', '인문과학대학', 'http://eng.knou.ac.kr/', '02-3668-4510', 135);
    VALUE('농학과', '자연과학대학', '-', '02-3668-4600', 140);
SELECT * FROM 학과;


-- 순서가 다르게 되어있을 때,
INSERT INTO 학과 (단과대학, 학과이름, 졸업학점, 전화번호)
	VALUES('자연과학대학', '농학과', 140, '02-3668-4600');
SELECT * FROM 학과;

SHOW COLUMNS FROM 학과;

-- 학과 테이블에서 학과이름이 '농학과'인 레코드의 주소 컬럼의 값을 'http://argi.knou.ac.kr/'로 수정하라
UPDATE 학과
	SET 주소 = 'http://argi.knou.ac.kr/' 
    WHERE 학과이름 = '농학과';
SELECT * FROM 학과;
-- SET ~ WHERE는 한 구문이므로 사이에 세미콜론 없어야 함

-- 문제: 잔액이 500,000만 원 이상인 학생 계좌에서 2% 이자를 지급하라
-- 1. 계좌 테이블 생성
-- 학생번호 char(20), 계좌번호char(20), 잔액int(20)
CREATE TABLE 계좌 (
	학생번호 CHAR(20) NOT NULL,
    계좌번호 CHAR(20) NOT NULL,
    잔액 INT NOT NULL,
    PRIMARY KEY (학생번호)
);
SELECT * FROM 계좌;

INSERT INTO 계좌
	VALUES
		('01', '1111', 500000),
		('02', '2222', 1000000),
		('03', '3333', 400000);
SELECT * FROM 계좌;

-- 계좌 2% 이자
SELECT 잔액 FROM 계좌;
UPDATE 계좌
	SET 잔액 = 잔액 * 1.02
    WHERE 잔액 >= 500000;
SELECT * FROM 계좌;

DROP TABLE 학생;
CREATE TABLE 학생 (
	학생번호 CHAR(20),
    -- 학생이름 CHAR(10),
    -- 성별  CHAR(2),
    -- 생년월일 CHAR(14),
    나이 INT,
    -- 전화번호 CHAR(20),
	PRIMARY KEY (학생번호)
);
INSERT INTO 학생
	VALUES
		("001", 30),
		("002", 40),
		("003", 50),
		("004", 60);
SELECT * FROM 학생;

UPDATE 학생
	SET 나이 = 나이 + 1;
	


