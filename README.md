# Headline

> An awesome project.

!> **Time** is money, my friend!

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```plantuml
@startuml
autonumber

Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
@enduml
```

```chart
{
  xAxis : [
    {
      type : 'category',
      data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis : [{ type : 'value' }],
  series : [
    {
      name:'sss',
      type:'bar',
      barWidth: '60%',
      data:[10, 52, 200, 334, 390, 330, 220]
    }
  ]
}
```