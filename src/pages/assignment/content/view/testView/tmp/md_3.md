# 문제 4: A+B `다국어`

| 시간 제한 | 메모리 제한 | 제출   | 정답   | 맞힌 사람 | 정답 비율 |
| --------- | ----------- | ------ | ------ | --------- | --------- |
| 2초       | 128MB       | 859740 | 346789 | 242418    | 40.320%   |

## 문제

두 정수 A와 B를 입력 받은 다음 A + B를 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

## 출력

첫째 줄에 A+B를 출력한다.

---

### 예제 입력

```
1 2
```

### 예제 출력

```
3
```

## 잡다한 거 테스트해보기

- 리스트도
  - 가능
    - 해요

### C 코드 예시

```c
#include <stdio.h>

int main() {
  int a, b;
  scanf("%d %d", &a, &b);
  printf("%d\n", a + b);
  return 0;
}
```

### Java 코드 예시

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner in = new Scanner(System.in);
		int A = in.nextInt();
		int B = in.nextInt();

		System.out.println(A+B);

		in.close();
	}
}
```
