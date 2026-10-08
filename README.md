# Rateio.me 💸

Uma aplicação simples e intuitiva para calcular e dividir despesas de eventos, restaurantes e contas de grupo, incluindo taxas de serviço.

---

## 📱 Funcionalidades

- **Registo do Evento:** Permite atribuir um nome personalizado para a despesa.
- **Cálculo de Taxas:** Aplicação automática de percentagem sobre o valor total da conta.
- **Divisão por Pessoas:** Cálculo instantâneo da quantia exata que cada participante deve pagar.
- **Resumo Detalhado:** Visualização clara com discriminativo de valores e totais.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend Web:** HTML5, CSS3, JavaScript (Vanilla)
- **Empacotamento Mobile:** [Capacitor](https://capacitorjs.com/)
- **Integração e Compilação Contínua (CI/CD):** GitHub Actions (Ubuntu runner, Node.js 20, Java Zulu 17, Gradle)

---

## 📂 Estrutura do Repositório

```text
Rateio.me/
├── .github/
│   └── workflows/
│       └── build-apk.yml    # Automação de compilação do APK
├── www/
│   ├── index.html           # Interface da aplicação
│   ├── style.css            # Estilos visuais
│   └── script.js            # Lógica dos cálculos
├── package.json             # Dependências do projeto e do Capacitor
└── README.md                # Documentação do projeto
