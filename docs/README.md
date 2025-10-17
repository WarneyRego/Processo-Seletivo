# NovaWeb - Soluções Digitais

Landing page desenvolvida para processo seletivo, demonstrando habilidades em desenvolvimento web moderno com design glassmorphism e funcionalidades avançadas.

## 🚀 Características

- **Design Responsivo**: Adaptado para desktop, tablet e mobile
- **Tema Claro/Escuro**: Alternância automática com persistência
- **Efeitos Glassmorphism**: Design moderno com transparências e blur
- **Partículas Animadas**: Background interativo em todas as seções
- **Carrossel de Serviços**: Navegação fluida e responsiva
- **Chat Inteligente**: Assistente virtual com integração OpenRouter AI
- **Scroll Suave**: Navegação fluida entre seções
- **Menu Mobile**: Hamburger menu responsivo

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Tailwind CSS
- **JavaScript**: Interatividade e funcionalidades
- **Particles.js**: Animações de partículas
- **OpenRouter API**: Chat inteligente com Gemini AI
- **Tailwind CSS**: Framework CSS utilitário

## 📁 Estrutura do Projeto

```
Processo_Seletivo/
├── index.html              # Página principal
├── src/
│   ├── js/
│   │   └── script.js       # JavaScript principal
│   └── images/
│       └── novaweb_logo.png # Logo da empresa
├── docs/
│   └── ESTRUTURA.md        # Documentação da estrutura
└── README.md               # Este arquivo
```

## 🎨 Seções da Landing Page

1. **Hero Section**: Apresentação principal com texto rotativo
2. **Serviços**: Carrossel com 6 serviços oferecidos
3. **Contato**: Formulário de contato e informações
4. **Chat**: Assistente virtual integrado

## 🎯 Objetivos do Processo Seletivo

Este projeto demonstra competências em:

- **Frontend Development**: HTML semântico, CSS moderno, JavaScript ES6+
- **Responsive Design**: Mobile-first approach com Tailwind CSS
- **API Integration**: Chat inteligente com OpenRouter/Gemini AI
- **User Experience**: Interface intuitiva e acessível
- **Code Quality**: Código limpo, documentado e otimizado
- **Modern Technologies**: Particles.js, Glassmorphism, Dark Mode

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Navegue pelas seções usando o menu ou scroll
3. Teste o chat clicando no botão flutuante
4. Alterne entre temas claro e escuro
5. Teste a responsividade redimensionando a janela

## 📱 Responsividade

- **Mobile**: < 640px - 1 serviço por slide
- **Tablet**: 640px - 1024px - 2 serviços por slide  
- **Desktop**: > 1024px - 3 serviços por slide

## 🤖 Chat Inteligente

O chat utiliza a API OpenRouter com modelo Gemini 2.0 Flash para responder perguntas sobre:
- Preços e orçamentos
- Serviços oferecidos
- Prazos de entrega
- Tecnologias utilizadas
- Informações de contato

## 🎯 Funcionalidades Principais

- **Tema Persistente**: Salva preferência no localStorage
- **Menu Mobile**: Fecha automaticamente ao navegar
- **Carrossel Auto-play**: Avança automaticamente a cada 5 segundos
- **Partículas Interativas**: Reagem ao mouse em todas as seções
- **Scroll Suave**: Navegação fluida entre seções
- **Fallback Inteligente**: Respostas pré-definidas quando API falha

## 🔧 Configuração

Para personalizar o chat, edite as variáveis no `script.js`:
```javascript
const OPENROUTER_API_KEY = 'sua-chave-aqui';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
```

## 📄 Sobre o Projeto

Este projeto foi desenvolvido como parte de um processo seletivo, demonstrando:

- **Habilidades Técnicas**: HTML5, CSS3, JavaScript moderno
- **Design Responsivo**: Adaptação para diferentes dispositivos
- **Integração de APIs**: Chat inteligente com OpenRouter
- **Animações Avançadas**: Particles.js e efeitos CSS
- **UX/UI**: Interface intuitiva e moderna
- **Performance**: Código otimizado e limpo

---

**Desenvolvido para processo seletivo - Demonstração de competências técnicas**

