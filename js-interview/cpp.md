## 静态成员
目的是将和**某些类紧密相关的**但和**实例无关**但全局变量和函数写到类里面   
包括静态成员函数/静态成员变量，使用`static`关键字声明，为所有对象所共享（本质是全局变量和全局函数），`sizeof`运算符不会计算静态成员变量  
访问方式:
- `类名`::`静态成员名`
- `对象名`.`静态成员名`
- `指针`->`静态成员名`

静态成员函数没有`this`指针，不能引用非静态成员  
类的静态成员变量必须在文件中进行一次说明或者初始化，否则编译能通过，链接不能通过。  
ps:我理解静态成员函数更多是为对静态成员变量操作提供接口？ 
## 静态成员变量的指针
是这个[问题](https://stackoverflow.com/questions/11490170/pointer-to-static-member-variable)讨论的类静态变量需要初始化吗？ 
还是对于类的某个静态变量是指针的内存释放问题？
## 临时对象
直接调用(代码上手动去调用而非编译器自己调用)构造函数将会产生一个临时对象  
- 使用前置递增来实现后置递增
- 在传递对象参数时，选择引用方式而不是传值方式
- 不要在函数实参中创建shared_ptr，抛弃临时对象，让所有的智能指针都有名字
## 拷贝构造函数
调用的场景
- 一个对象以值传递方式传入函数体
- 一个对象以值传递的方式从函数返回
- 一个对象需要通过另外一个对象进行初始化
## 运算符重载
不能被重载的运算符`.`  `.*` `::` `?:` `sizeof`  
只能作为类成员函数重载的运算符 `()` `[]` `->` `=`  
 
重载有成员函数和友元函数两种形式，差别是成员函数的少一个参数且有`this`（如二元运算符则成员函数一个参数，友元函数两个参数）
1. 成员函数
``` c++
class CA
{
    public:
    template<class RightType> 
    CA& operator << (const RightType& right)
    {
        //...
            return *this;
    }

    template<class RightType>
    CA& operator >>(RightType& right)
    {
        //...
        return *this;
    }
};
```
2. 普通函数
``` c++
template<class LeftType,  class RightType>  
LeftType& operator << (LeftType& left, const RightType& right)
{
    //...
    return left;
}

template<class LeftType,  class RightType>  
LeftType& operator >> (LeftType& left, RightType& right)
{
    //...
    return left;
}
```
关于输入输出类型，我总结一下就是：
- 函数的返回类型可以和函数的入参类型不一致，但比如赋值运算符`+=`的返回类型和第一个参数类型一致
- 若返回值可以做左值且进行连续运算操作，则需要返回引用类型，如流运算符`<<`和`>>`，赋值运算符`=`；若运算结果和输入的数据并不是相同的对象，而是一个临时对象，则返回普通类型而非引用类型，如所有的算术运算符；类型转换运算符不需要指定返回类型
- 若运算符会改变值，则传入参数为**引用**类型，如流运算符`>>`的右值，前缀和后缀的自增运算符`++`；若不会改变值，则传入参数为**常量引用**类型（这种情况最常见），如流运算符`<<`的右值、算术运算符`+ -`、赋值运算符`-= +=`、比较运算符`== !=`

### 赋值运算符
只能是类的非静态成员函数，不能被继承
``` c++
class T {
    public T& operator =(const T& t) { //避免在函数调用时对实参的一次拷贝；不希望在这个函数中对用来进行赋值的原版做任何修改
        ...
        return *this; // 在函数返回时避免调用拷贝构造函数，提高效率；实现连续赋值
    }

}
```
### 算术运算符
``` c++
class CA
{
     public:

     template<class ReturnType, class RightType>
      ReturnType operator + (const RightType& right) const
     {
           //...
            return 一个新的ReturnType类型对象。
      }

      //取反运算符是一个一元运算符。
     template<class ReturnType>
      ReturnType operator  ~ () const
     {
           //...
            return 一个新的ReturnType类型对象。
      }
};

```

### 自增运算符
``` c++
class CA
{
     public:

     CA& operator  ++ (int) // 带int为前缀，返回值可以做左值
     {
           //...
            return *this;
      }

    CA operator ++ () // 后缀，返回值不能做左值
     {
           //...
            return 新的CA类型值
      }
};
```
### * & -> 运算符
用于智能指针以及代理的实现
## cast安全强制类型转换
中文翻译太差，建议直接看英文版👉 [Explicit conversions (casts)](https://docs.microsoft.com/en-us/cpp/cpp/type-conversions-and-type-safety-modern-cpp?view=vs-2019#explicit-conversions-casts)
- [static_cast](https://docs.microsoft.com/en-us/cpp/cpp/static-cast-operator?view=vs-2019)
- [dynamic_cast](https://docs.microsoft.com/en-us/cpp/cpp/dynamic-cast-operator?view=vs-2019)
- [const_cast](https://docs.microsoft.com/en-us/cpp/cpp/const-cast-operator?view=vs-2019)
- [reinterpret_cast](https://docs.microsoft.com/en-us/cpp/cpp/reinterpret-cast-operator?view=vs-2019)

`cast-name<type-id>(expression)`  
### static_cast
编译时类型校验，保留`const`, `volatile`和 `__unaligned`属性
- 用于基类（父类）和派生类（子类）之间指针或引用的转换：进行上行转换（派生类的指针或引用->基类）是安全的；进行下行转换（基类指针或引用->派生类）时，由于没有runtime类型检查，所以不安全的  
- 用于基本数据类型之间的转换，如把int转换成char，把int转换成enum。这种转换的安全性也要开发人员来保证，如果超过允许范围则为`undefined`
- 把空指针转换成目标类型的空指针  
- 把任何类型的表达式转换成`void`类型。
### dynamic_cast
与`static_cast`差别是支持运行时类型校验，更安全；`type-id`必须是类的**指针**、类的**引用**或者`void*`
``` c++
class B {virtual void f();};
class D : public B {virtual void f();};

void f() {
   B* pb = new D;   // unclear but ok
   B* pb2 = new B;

   D* pd = dynamic_cast<D*>(pb);   // ok: pb actually points to a D 会做一下runtime检测，发现pb确实是指向D
   D* pd2 = dynamic_cast<D*>(pb2);   // pb2 points to a B not a D
}
```
多继承的时候，需要写明两次转换（可以直接看doc里的例子）

### const_cast
专门用来修改类型的`const`,`volatile`和`__unaligned`属性。常量**指针和引用**被转化成非常量的指针和引用，并且仍然指向原来的对象，不可以直接改常量变量
### reinterpret_cast
修改指针类型，包括把空指针转换成特定类型的空指针。如在hash映射中
``` c++
unsigned short Hash( void *p ) {
   unsigned int val = reinterpret_cast<unsigned int>( p );
   return ( unsigned short )( val ^ (val >> 16));
}
```
类似中文总结：https://www.cnblogs.com/goodhacker/archive/2011/07/20/2111996.html
## 父类可以实现纯虚函数然后实例化吗
太难了，这题我不会
## 友元
友元函数：普通函数或者类成员函数访问另一个类中的私有或保护成员的机制，在类中申明`friend <返回类型><友元函数名>(<参数表>)`，在类外定义。注意不能把其他类的私有成员函数声明为友元。
友元类：成员函数可以访问所有私有属性，没有继承性和传递性
``` c++
class A {
private:
    int myPrivateVariable;
    friend int friend1(A* a); // 友元函数
    friend void B::friend2(A* a);
    friend friendClassC; // 友元类
};
```
## 智能指针
为解决原有资源管理和垃圾回收（garbage-collection）中`new`和`delete`之间抛错/函数返回/重复`delete`的问题  
**RAII**（Resource Acquisition is initialization）  
用对象代表资源，把管理资源的任务转化为管理对象的任务，将资源的获取和释放与对象的构造和析构对应起来，从而确保在对象的生存期内资源始终有效，对象销毁时资源必被释放
核心思想是引用计数

有时间建议自己看文档
- [auto_ptr](http://www.cplusplus.com/reference/memory/auto_ptr/)(deprecated)
- [shared_ptr](http://www.cplusplus.com/reference/memory/shared_ptr/)
- [weak_ptr](http://www.cplusplus.com/reference/memory/weak_ptr/)
- [unique_ptr](http://www.cplusplus.com/reference/memory/unique_ptr/)

### shared_ptr  
1. 多个指针可以同时指向一个对象，会有循环引用问题  
``` c++
// 不要这么做
class B;
class A
{
public:
 A(  ) : m_sptrB(nullptr) { };
 ~A( )
 {
  cout<<" A is destroyed"<<endl;
 }
 shared_ptr<B> m_sptrB;
};
class B
{
public:
 B(  ) : m_sptrA(nullptr) { };
 ~B( )
 {
  cout<<" B is destroyed"<<endl;
 }
 shared_ptr<A> m_sptrA;
};
//***********************************************************
void main( )
{
 shared_ptr<B> sptrB( new B );
 shared_ptr<A> sptrA( new A );
 sptrB->m_sptrA = sptrA;
 sptrA->m_sptrB = sptrB;
}

```
2. 尽量不要从一个裸指针(naked pointer)创建`shared_ptr`
``` c++
// 也不要这么做
void main( )
{
 int* p = new int;
 shared_ptr<int> sptr1( p);
 shared_ptr<int> sptr2( p );
}
```
3. 使用`make_shared`宏来加速创建的过程：主动分配内存并且保存引用计数,`make_shared`以一种更有效率的方法来实现创建工作。
``` c++
shared_ptr<int> ptr2 = make_shared<int>(100);
```
接口
- get 获取`shared_ptr`绑定的资源.
- use_count 获取引用计数
- reset 释放关联内存块的所有权，如果是最后一个指向该资源的`shared_ptr`,就释放这块内存。
- 比较运算符operator bool
- unique 判断是否是唯一指向当前内存的`shared_ptr`
- swap 交换两个指针内容
- owner_before
### weak_ptr
`weak_ptr`可以共享`shared_ptr`持有的资源，但不增加引用计数（更准确地说是强引用计数）。即提供一个（1）能够确定对方生存与否（2）互相之间生命周期无干扰（3）可以临时借用一个强引用（在你需要引用对方的短时间内保证对方存活）的智能指针  
``` c++
void main( )
{
 shared_ptr<Test> sptr( new Test ); // 以shared_ptr作为参数构造weak_ptr, 引用计数为1
 weak_ptr<Test> wptr( sptr ); // 强引用计数仍为1，弱引用为1
 weak_ptr<Test> wptr1 = wptr; // 强引用计数仍为1，弱引用为2
 shared_ptr<Test> sptr2 = wptr.lock( ); 
}
```
1. 可以解决`shared_ptr`循环引用问题
``` c++
class B;
class A
{
public:
 A(  ) : m_a(5)  { };
 ~A( )
 {
  cout<<" A is destroyed"<<endl;
 }
 void PrintSpB( );
 weak_ptr<B> m_sptrB; // 👈差别在这里
 int m_a;
};
class B
{
public:
 B(  ) : m_b(10) { };
 ~B( )
 {
  cout<<" B is destroyed"<<endl;
 }
 weak_ptr<A> m_sptrA; // 👈
 int m_b;
};

void A::PrintSpB( )
{
 if( !m_sptrB.expired() )
 {  
  cout<< m_sptrB.lock( )->m_b<<endl;
 }
}

void main( )
{
 shared_ptr<B> sptrB( new B );
 shared_ptr<A> sptrA( new A );
 sptrB->m_sptrA = sptrA;
 sptrA->m_sptrB = sptrB;
 sptrA->PrintSpB( ); 
}
```
2. `weak_ptr`不支持普通指针包含的`*，->`操作，它并不包含资源所以也不允许操作资源，使用时需要`lock()`得到`shared_ptr`或者直接将`weak_ptr`转型为`shared_ptr`
``` c++
void main( )
{
 shared_ptr<Test> sptr( new Test );
 weak_ptr<Test> wptr( sptr );
 shared_ptr<Test> sptr2 = wptr.lock( );
}
```
### unique_ptr
在任何时间点，资源只能唯一地被一个`unique_ptr`占有。当`unique_ptr`离开作用域，所包含的资源被释放。如果资源被其它资源重写了，之前拥有的资源将被释放。所以它保证了他所关联的资源总是能被释放
``` c++
unique_ptr<int[ ]> uptr( new int[5] );
```
无法进行复制构造，无法进行复制赋值操作。即无法使两个`unique_ptr`指向同一个对象，但是可以进行移动构造和移动赋值操作
接口
- reset, get, operator bool 用法同`shared_ptr`
- release 仅仅释放所有权但不释放资源
## const函数
为了保证const对象的常量性，编译器须区分不安全与安全的成员函数（即区分试图修改类对象与不修改类对象的函数），而只有被声明为const的成员函数才能被一个const类对象调用，非常量成员函数不能被常量成员对象调用
``` c++
class Point{
    public:
    int GetX() const; // 在函数头后面附加const关键字即可
    int GetY() const;
    void SetPt (int, int);
    void OffsetPt (int, int);
    private:
    int xVal, yVal;
}; 
void main {
    const Point pt1;
    pt1.GetX(); // 可以
    pt1.SetPt(0, 0); // 不可以
}
```

一些你可能感兴趣的bonus小问题
- 多态（原理）
- 虚指针 虚表 虚函数
- 成员函数初始化列表和直接复制的区别
- STL的底层实现和具体特性
- 设计模式
- c++新特性
