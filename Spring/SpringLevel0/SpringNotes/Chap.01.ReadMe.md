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