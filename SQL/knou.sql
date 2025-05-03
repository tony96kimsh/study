DROP TABLE IF EXISTS 교수;
DROP TABLE IF EXISTS 학과;

CREATE TABLE 학과 (
    학과이름   CHAR(50)    NOT NULL,
    단과대학   CHAR(30)    NOT NULL,
    주소       VARCHAR(200),
    전화번호   CHAR(15),
    졸업학점   INT         NOT NULL,
    PRIMARY KEY (학과이름)
);

CREATE TABLE 교수 (
    교수번호   CHAR(13)    NOT NULL,
    교수이름   CHAR(30)    NOT NULL,
    직위       CHAR(10)    NOT NULL,
    소속학과   CHAR(50)    NOT NULL,
    연봉       INT,
    PRIMARY KEY (교수번호),
    FOREIGN KEY (소속학과) REFERENCES 학과(학과이름)
);

SHOW TABLES;
SELECT * FROM 학과;
SELECT 학과이름, 단과대학 FROM 학과;

-- test

CREATE TABLE 과목 (
	 과목코드 CHAR(5) NOT NULL,
     과목명 VARCHAR(200) NOT NULL,
     학점 INT NOT NULL,
     선수과목 char(5) null,
	 이수구분 char(20) null check (이수구분 in ('전공필수', '일반선택', '교양')),
     
     교수번호 char(13) NOT NULL,
     PRIMARY KEY (과목코드),
     FOREIGN KEY (선수과목) REFERENCES 과목 (과목코드),
     FOREIGN KEY (교수번호) REFERENCES 교수 (교수번호)
);
SELECT * FROM 과목;    