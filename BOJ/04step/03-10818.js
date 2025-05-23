/*
제목: 최소, 최대
설명: 최솟값과 최댓값을 찾는 문제
제출: https://www.acmicpc.net/problem/10818

문제
N개의 정수가 주어진다. 
이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

예제 입력 1
5
20 10 35 30 7

예제 출력 1
7 35
*/

//풀이
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const N = parseInt(fileData[0]);
const arr = fileData[1].split(" ").map(Number);
const result = [];

result.push(Math.min(...arr)); //스프레드 연산자는 배열의 형태를 풀어서 함수의 인자값으로 넣어줌
result.push(Math.max(...arr));

console.log(result.join(" "));
