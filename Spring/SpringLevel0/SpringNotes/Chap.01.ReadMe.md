Spring Boot Provides Convention Over Configuration[Deployment Model,AutoDetection,@EnableAutoConfiguration[Contextually Aware],Library Selection,StandAlone,Opinionated].Spring Cloud 
Built On Top Of Spring Boot.Tons Of Choice While Building Web Application[Spring Boot Select Standard Choice[Initializer]].AspectOrientedProgramming[Concern That Affects Many Tiers 
Of The Application],Web[Mvc,Webflux[ Reactive,Asynchronous]],Core[i18n: Internationalization Support,Validation Support,Data Binding Support,Type Conversion Support,Dependency 
Injection], Testing[Unit, Integration],Integration[Rmi,Ws,Mq], DataAccess.Tightly/Loosely-Coupled.Servlet Low-Level Api.http://spring.io/projects.Spring Cloud/Data/Security.Ant 
Replacement For Make,Designed For CrossPlatform,Procedural.Ivy[Manage Transitive Dependency] With Ant[build.xml].Maven[pom.xml].Goal:Clean/Compile/Package/Install[Local Repoository]
/Deploy[Remote Repoository].GroupId,ArtifactId,Version[Gav].Type Pom Includes All Dependency For That Pom.Scopes:compile/provided[Servlet]/runtime[Driver]/test/system/import
[Dependency Management].Dependency/Plugin Repoository:Comes From SuperPom.Nexus/Artifactory.Phase:[validate,compile,test,package,integration-test,verify,install,deploy].
EffectivePom.Jsr-330:Dependency Injection.Singleton/ProtoType/Request/Session/Global Socpe.For Property File Use context:property-placeholder & context:annotation-config To Utilize 
@Value  Annotation.In Annotation Based Configuration Use @PropertySource/@PropertySources With PropertySourcesPlaceholderConfigurer Bean Configured.Spring.tld & Spring-Form.tld.
Jsr-303 Reference Implementation Is Hibernate Validator.BeanNameViewResolver Is A ViewResolver Implementation That Resolves The View Name Returned From The Controller As A Bean Name
Registered In The Application Context.If The Controller Returns The ViewName As JsonView, BeanNameViewResolver Invokes The Corresponding View Implementation Bean Named As JsonView 
& Resolves/Parses The Model Object Into The Corresponding View Type(Jsp, Velocity, Thymeleaf)/Format(Json,Xml).ContainerLess[Servlet 3.0 Spoec With Embeded Container,All 
Configuration Exist Inside Application Using Java Configuration].Use Spring Starter Project.Annotation For ComponentScan,Handler,Interceptor,Formatter,Converter.Do mvn 
dependency:resolve.Keep All Views Under Web-Inf[Not Publicly Accessible] For Security.edu.gandhi.prajit.spring.maven.validator.custom.Phone Creates A Custom Validator For 
edu.gandhi.prajit.spring.maven.model.Attendee Class In 06.SpringMvcBase4.Create Rds MySql Instance In https://ap-south-1.console.aws.amazon.com/rds.Select Endpoint & Create 
jdbc:mysql://testdatabase.c1zgljka8wix.ap-south-1.rds.amazonaws.com,Provide UserName/Password/DatabaseName,Select Jar According To DbEngine.

Spring Config Server Encrypt/Decrypt Property Values:
StrongKey CryptoCabinetJava Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files 8 Download:
Use Key Tool For keytool -genkeypair -alias ConfigServerKey -keyalg RSA -dname "CN=Config Server,OU=Spring Cloud,O=PrajitGandhi" -keypass K3y_S3cr3t -keystore ConfigServerStore.jks 
-storepass K3y_S3cr3t.Zuul Is GateKeeper For Movie GhostBuster,Api Gateway For Netflix.Ribbon Is Load Balancer.Hystrix Is Implementing CircuitBreaker.Ribbon Is Load Balancer.
SingleSignOn[Sso]/CentralAuthenticationServer[Cas].Create For Https,Ssl:keytool -genkey -alias tomcat -keyalg RSA -dname "CN=Config Server,OU=Spring Security,O=PrajitGandhi" 
-keypass changeit -keystore tomcat.tomcat Is Default Name  Of The KeyStore.Copy This File E:\AppDownloaded\ApacheTomcat8531\conf & Keep It Inside Project.<Connector 
protocol="org.apache.coyote.http11.Http11NioProtocol" port="8443" maxThreads="200" scheme="https" secure="true" SSLEnabled="true" 
keystoreFile="E:/AppDownloaded/ApacheTomcat8531/conf/tomcat" keystorePass="changeit" clientAuth="false" sslProtocol="TLS"/>.Edit Server.xml In Servers Eclipse Folder.

Aspect=PointCut[Where Aspect Is Applied]+Advice[What Code Is Executed[@Before(PointCutExpression)]].Use JoinPoint For Retrieving Information.PointCutExpression=
ReturnType Method Name Parameters=* * (..)==All Return Type,All Method Name,All Parameter Type.@Aspect/@Before.<aop:aspectj-autoproxy/> Modify @Aspect Bean Via Proxy Or
@EnableAspectJAutoProxy.Use Cross-Reference View For Aspect As Use SPring Explorer View For Bean Autowiring.BeforeAdvice(@Before)/AfterAdvice/AfterThrowing[ErrorCallback]/
AfterReturning[SuccessCallBack]/AroundAdvice.@Before Can Block Execution Of Callee By THrowing Exception,Exception Will Be Propagated To Caller.@After Advice.@AfterThrowing Only 
After Exception Thrown By Callee,TypeSafe Exact Exception Will Be Thrown.@AfterReturning,Only If Successfully Executed,Return Value Can Be Captured Via returning Argument.@Around:
Can Prevent Original Method Execution,Can Catch Exception,Modify Return Value,Use ProceedingJoinPoint.MethodExecution(MethodDeclaration)==
execution(ReturnType Package.Class.MethodName Parameters)==execution(* *(..))==.. Any Number Of Parameter,* Single Parameter Of AnyType.
MethodExecution(MethodDeclaration)==execution(ReturnType PackageName.ClassName.MethodName Parameters)==execution(* pkg.subpkg..*[CLassPrefix/Suffix]*.*(..))==.. Any Subpackage.
execution(* *.*(..))==Any ReturnType,AnyClass In [Default] Package,Any Method With Any No Of Parameter.
execution(* *..*.*(..))==Any ReturnType,AnyClass In [Any] Package,Any Method With Any No Of Parameter.
execution(@Package.AnnotationClass * *(..))==Method That Annotated With Specific AnnotationClass.
execution(* (@Package.AnnotationClass *).*(..))==Class That Annotated With Specific AnnotationClass.
bean(*Service)==Spring Bean Name Suffixed With Service,All Methods In That Bean.Using @PointCut,We Can Reuse PointCut Expression.@PointCut('PointcutExpression') At DefinedMethod & 
Defined In Class PointCutClass,To ReUse Do PointCutClassFqcn.DefinedMethod() In @Before/@After/@AfterThrowing/@AfterReturning/@Around.1.Define Architechture Using Pointcuts,Define 
Bahavior Using Advice,Add Advice To Specific PointCut.FirstFailureDataCapture[Ffdc].
