(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{213:function(a,t,s){"use strict";s.r(t);var n=s(28),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"spring-ioc容器-源码解析——abstractapplicationcontext刷新beanfactory后处理、调用bean工厂后处理器、注册bean后处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc容器-源码解析——abstractapplicationcontext刷新beanfactory后处理、调用bean工厂后处理器、注册bean后处理器"}},[a._v("#")]),a._v(" Spring IoC容器 源码解析——AbstractApplicationContext刷新beanFactory后处理、调用bean工厂后处理器、注册bean后处理器")]),a._v(" "),s("h2",{attrs:{id:"beanfactory后处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory后处理"}},[a._v("#")]),a._v(" beanFactory后处理")]),a._v(" "),s("p",[a._v("提供模板方法，供子类实现。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("postProcessBeanFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConfigurableListableBeanFactory")]),a._v(" beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"调用bean工厂后处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用bean工厂后处理器"}},[a._v("#")]),a._v(" 调用bean工厂后处理器")]),a._v(" "),s("p",[a._v("获取当前应用上下文中的bean工厂后处理器，进行调用。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PostProcessorRegistrationDelegate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("invokeBeanFactoryPostProcessors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanFactoryPostProcessors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("如果bean工厂临时类加载器为null，并且bean工厂包括加载时编织bean名称bean，工厂添加加载时编织处理器，并且设置临时类加载器。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getTempClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("containsBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("LOAD_TIME_WEAVER_BEAN_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addBeanPostProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LoadTimeWeaverAwareProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setTempClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ContextTypeMatchClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBeanClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"注册bean后处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册bean后处理器"}},[a._v("#")]),a._v(" 注册bean后处理器")]),a._v(" "),s("p",[a._v("委托注册bean后处理器。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PostProcessorRegistrationDelegate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("registerBeanPostProcessors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("beanFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);