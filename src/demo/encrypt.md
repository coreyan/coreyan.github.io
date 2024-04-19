---
icon: lock
category:
  - 使用指南
tag:
  - 加密
--- 

# 密码加密的文章

实际的文章内容。

段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。

段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。
```csharp
public interface IGenericClass<T> //定义泛型接口
{
}
public class GenericClass<T> : IGenericClass<T>  //定义泛型类，该类实现了泛型接口，此处接口的T是class的泛型参数T传入
{
    public void Add(T data) { } //使用泛型类的类型作为参数的方法
    public void Compare<TOther>(T data1, TOther data2) { }  //定义泛型方法
}
public class MultipleGenericClass<T1, T2, T3> //多个泛型参数
{
}
```