# HTML ELEMENT

## 블록 요소

### div(Division) -> [\<div>\</div>]
- 특별한 의미가 없는 구분을 위한 요소

### h1~h6(heading) -> [\<h1>\</h1>]
- 제목을 의미하는 요소
- 숫자가 작을수록 더 중요한 제목을 정의

### p(Paragraph) -> [\<p>\</p>]
- 문장을 의미하는 요소

### ul(Unordered List) -> [\<ul>\</ul>]
- 순서가 필요없는 목록의 집합을 의미

  #### li(List Item) -> [\<li>\</li>]
  - 목록 내 각 항목

### ol(Ordered List) -> [\<ol>\</ol>]
- 순서가 필요있는 목록의 집합을 의미

## 인라인 요소

### img(image) -> <br>[\<img src="경로" alt="대안으로 띄울 이미지의 이름(속어로 액박)" />]
- 이미지를 삽입하는 요소

### a(Anchor) -> <br>[\<a href="홈페이지 주소">\<\a>],<br>[\<a href="홈페이지 주소"target="링크 URL의 표시(브라우저탭) 위치">\<\a>]
- 다른/같은 페이지로 이동하는 하이퍼링크를 지정하는 요소
- 만약 target이 _blank면 새탭에 링크를 여는 것

### br(Break) -> [<br/]
- 줄 바꿈 요소

### label -> [\<label>\</label>]
- 라벨 가능 요소(input)의 제목

## 인라인 요소면서 블록 요소
### input -> [\<input type="입력받을 데이터의 타입" />],<br>[\<input type="text" value="미리 입력된 값(데이터)"/>],<br>[\<input type="text" placeholder="사용자가 입력할 값(데이터)의 힌트"/>],<br>[\<input type="text" disabled(입력 요소 비활성화)/>],<br>[\<input type="checkbox" checked(체크박스 입력 요소 체크됨)/>],<br>[\<input type="radio"(사용자에게 체크 여부를 그룹에서 1개만 입력 받음!) name="그룹"/>]
- 베이스는 인라인 요소인데 특징은 블록 요소
- 수평으로 쌓이는 특징
- 가로, 세로 값이 지정 가능하며 위, 아래 여백을 설정 가능

## 테이블(table) 요소
> 표 요소, 행(Row)과 열(Column)의 집합
- 행을 먼저 적고 자식 요소로 열을 적음

### tr(Table Row) -> [\<tr>\</tr>]
- 테이블 행

### td(Table Data) -> [\<td>\</td>]
- 테이블 열