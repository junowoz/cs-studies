# Nest

nest new project-name

src
- app.controller.spec.ts (A basic controller with a single route.)
- app.controller.ts (The unit tests for the controller.)
- app.module.ts (The root module of the application.)
- app.service.ts (A basic service with a single method.)
- main.ts (The entry file of the application which uses the core function NestFactory to create a Nest application instance.)

## Nest Arch

- Modules: São como pacotes ou bibliotecas em seu código. Eles ajudam a organizar o código em partes menores e mais gerenciáveis, cada uma focada em uma tarefa específica. É uma classe que encapsula um grupo de serviços relacionados, como providers, controllers e até mesmo outros modulos. São como os componentes em React.

`@Module()`

- Controllers: São responsáveis por lidar com as solicitações de entrada e retornar as respostas para o cliente. Lidam com as requisicoes e respostas. São como os controllers em MVC. Lidam com HTTP requests.

`@Controller()`

- Provider/Service: São classes que podem ser injetadas em controllers ou outros providers. São como os models em MVC. São entidades que contêm lógica de negócios ou conectam-se a fontes de dados.

`@Injectable()`

## Exemplo

1. Módulos:
UserModule: Gerencia tudo relacionado aos usuários (registro, login, perfil, etc.).
ResumeModule: Lida com a criação, atualização e exclusão de currículos em formato JSONResume.

2. Controllers:
UserController: Contém endpoints como register, login, getProfile.
ResumeController: Contém endpoints como createResume, updateResume, getResume, deleteResume.

3. Services:
UserService: Lida com a lógica de negócios relacionada aos usuários. Por exemplo, verifica se um e-mail já está registrado.
ResumeService: Lida com a lógica relacionada aos currículos. Por exemplo, transforma dados do usuário em formato JSONResume ou armazena currículos no banco de dados.

4. Providers:****
Estes são, em sua maioria, entidades que você precisaria injetar em outras partes do código. No contexto do Nest.js, um serviço é também um tipo de provider. Mas você pode ter providers adicionais, como classes de acesso ao banco de dados ou outras utilidades.

---

## MVC: É um padrão de design que separa a lógica do seu aplicativo em três partes principais.

- Model: Lida com os dados e a lógica de negócios. (Back). Isto é o que recebemos do back-end.
- View: É a interface do usuário, o que ele vê e interage. (Front) O template ou HTML.
- Controller: Atua como intermediário, pegando os inputs do usuário da View, processando-os com o Model e retornando um resultado. Isto gerencia o fluxo de dados entre o Model e a View. Conhecido como Component também.
---


Um superset de Node.js. It uses express under the hood and contains batteries, meaning it has a lot of functions. It works for monolithic and micro services too.

## Files
- @nestjs/platform-express defines express as the default HTTP server in a nest app
- /nest-cli.json holds the metadata to build, organize or deploy nest apps.

`nest start:dev` for starting the project watching changes

The nest app starts at the main.ts, inside /src. Main.ts load the AppModule, that is imported from /src/app.module.ts

## Building Blocks of a Nest.js App
We have 3 major components. Modules, Controllers and Providers

###  Modules (AppModule) [app.module.ts]
Is a class using the @Module decorator, in which we also import AppService [app.service] and AppControler [app.controler]. The app module serves as a file where the call other files, it’s like the index of the project. Transforms a class into a module.

@Module() decorar serves as a root module that is an entry point to resolve the structure and relationships. It is highly recommended to have multiple modules to organize your application’s components.

Here developers define metadata about a class. This registers many modules to the Nest App.

### Controller (AppController) [app.controler.ts]
A class created using the @Controller decorator. It transforms a class into a Controller.

### Provider (AppService) [app.service.ts]
A class created using the @Injectable annotation. This serves as a provider

## Decorators

- @Module() transforms a class into a module.
- @Controller()transforms a class into a controller.
- @Injectable() transforms a class into a provider.