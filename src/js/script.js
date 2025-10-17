// alternar tema e funcionalidades do chat
document.addEventListener('DOMContentLoaded', function() {
    // botões de alternar tema
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const sunIconMobile = document.getElementById('sun-icon-mobile');
    const moonIconMobile = document.getElementById('moon-icon-mobile');
    
    // carregar tema salvo ou padrão escuro
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === null) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // funcionalidade de alternar tema
    function toggleTheme() {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // alternar tema desktop
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // alternar tema mobile
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', function() {
            toggleTheme();
            // fechar menu mobile após mudança de tema
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            if (mobileMenu && menuIcon && closeIcon) {
                mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-[-10px]');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }
    
    // menu mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('opacity-100');
            
            if (isOpen) {
                // fechar menu
                mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-[-10px]');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
    } else {
                // abrir menu
                mobileMenu.classList.remove('opacity-0', 'invisible', 'translate-y-[-10px]');
                mobileMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });
        
        // fechar menu ao clicar nos links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-[-10px]');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
        
        // fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-[-10px]');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }
    
    // efeito de texto rotativo
    const rotatingText = document.getElementById('rotating-text');
    const texts = [
        'Presença digital',
        'Identidade',
        'Marca online',
        'Experiência'
    ];
    
    let currentIndex = 0;
    
    function rotateText() {
        rotatingText.style.opacity = '0';
        rotatingText.style.transform = 'translateY(20px)';
        
    setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            rotatingText.textContent = texts[currentIndex];
            rotatingText.style.opacity = '1';
            rotatingText.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // adicionar transição css
    rotatingText.style.transition = 'all 0.3s ease-in-out';
    
    // iniciar rotação a cada 2 segundos
    setInterval(rotateText, 2000);
    
    // carrossel de serviços
    const carousel = document.getElementById('services-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dotBtns = document.querySelectorAll('.dot-btn');
    
    let currentSlide = 0;
    let totalSlides = 2; // padrão para desktop
    
    // ajustar slides baseado no tamanho da tela
    function updateSlidesForScreenSize() {
        if (window.innerWidth < 640) { // mobile
            totalSlides = 6; // 1 serviço por slide
        } else if (window.innerWidth < 1024) { // tablet
            totalSlides = 3; // 2 serviços por slide
        } else { // desktop
            totalSlides = 2; // 3 serviços por slide
        }
        
        // resetar para primeiro slide se atual estiver fora dos limites
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateCarousel();
    }
    
    // atualizar no redimensionamento
    window.addEventListener('resize', updateSlidesForScreenSize);
    updateSlidesForScreenSize();
    
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // atualizar pontos - mostrar apenas para tamanho atual da tela
        dotBtns.forEach((dot, index) => {
            if (index < totalSlides) {
                dot.style.display = 'block';
                if (index === currentSlide) {
                    dot.classList.remove('bg-gray-300', 'dark:bg-gray-600');
                    dot.classList.add('bg-purple-primary');
                } else {
                    dot.classList.remove('bg-purple-primary');
                    dot.classList.add('bg-gray-300', 'dark:bg-gray-600');
                }
            } else {
                dot.style.display = 'none';
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }
    
    // event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dotBtns.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // reprodução automática do carrossel
    setInterval(nextSlide, 5000);
    
    // navegação com scroll suave
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
                navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // fechar menu mobile se estiver aberto
                const mobileMenu = document.getElementById('mobile-menu');
                const menuIcon = document.getElementById('menu-icon');
                const closeIcon = document.getElementById('close-icon');
                
                if (mobileMenu && mobileMenu.classList.contains('opacity-100')) {
                    mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
                    mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-[-10px]');
                    if (menuIcon) menuIcon.classList.remove('hidden');
                    if (closeIcon) closeIcon.classList.add('hidden');
                }
                
                // calcular posição alvo com offset do cabeçalho
                const headerHeight = 100; // altura do cabeçalho com padding
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // usar scroll suave nativo para melhor performance
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // fallback para navegadores antigos
                setTimeout(() => {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 10);
            }
        });
    });
    
    // inicialização do particles.js
    if (typeof particlesJS !== 'undefined') {
        // partículas da seção hero
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4c1d95'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4c1d95',
                    opacity: 0.4,
                    width: 2
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
        
        // partículas da seção de serviços
        particlesJS('particles-services', {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4c1d95'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.4,
                    random: true
                },
                size: {
                    value: 2.5,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: '#4c1d95',
                    opacity: 0.3,
                    width: 2
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 150,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
        
        // partículas da seção de contato
        particlesJS('particles-contact', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4c1d95'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.4,
                    random: true
                },
                size: {
                    value: 2.5,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: '#4c1d95',
                    opacity: 0.3,
                    width: 2
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 150,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    }

    // funcionalidades do chat
    const chatButton = document.querySelector('.chat-button');
    const chatModal = document.getElementById('chat-modal');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');

    // configuração da api openrouter
    const OPENROUTER_API_KEY = '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';
    const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

    let isTyping = false;

    // abrir modal do chat
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            chatModal.classList.remove('hidden');
            chatInput.focus();
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatModal.classList.add('hidden');
        });
    }

    if (chatModal) {
        chatModal.addEventListener('click', function(e) {
            if (e.target === chatModal) {
                chatModal.classList.add('hidden');
            }
        });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message || isTyping) return;

        addMessage(message, 'user');
        chatInput.value = '';
        
        showTypingIndicator();
        
        // enviar para api openrouter
        sendToOpenRouter(message);
    }

    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex items-start gap-3 ${sender === 'user' ? 'flex-row-reverse' : ''}`;
        
        const avatar = document.createElement('div');
        avatar.className = `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            sender === 'user' 
                ? 'bg-purple-primary' 
                : 'bg-purple-primary'
        }`;
        avatar.innerHTML = sender === 'user' ? '<span class="text-white text-sm">👤</span>' : '<span class="text-white text-sm">🤖</span>';
        
        const messageContent = document.createElement('div');
        messageContent.className = `rounded-lg p-3 max-w-[80%] ${
            sender === 'user'
                ? 'bg-purple-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700'
        }`;
        
        const messageText = document.createElement('p');
        messageText.className = `text-sm ${
            sender === 'user'
                ? 'text-white'
                : 'text-gray-800 dark:text-gray-200'
        }`;
        messageText.textContent = message;
        
        messageContent.appendChild(messageText);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'flex items-start gap-3 typing-indicator';
        typingDiv.innerHTML = `
            <div class="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm">🤖</span>
            </div>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        isTyping = true;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        isTyping = false;
    }

    // enviar mensagem para api openrouter
    async function sendToOpenRouter(message) {
        try {
            const response = await fetch(OPENROUTER_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': window.location.origin,
                    'X-Title': 'novaweb chat'
                },
                body: JSON.stringify({
                    model: 'google/gemini-2.0-flash-exp:free',
                    messages: [
                        {
                            role: 'system',
                            content: 'você é um assistente da novaweb, uma empresa de desenvolvimento web. responda de forma amigável e profissional em português. foque em ajudar com informações sobre serviços de desenvolvimento web, design, seo e marketing digital. seja conciso mas útil. fale somente sobre isso. não falar sobre outros assuntos.'
                        },
                        {
                            role: 'user',
                            content: message
                        }
                    ],
                    max_tokens: 500,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            removeTypingIndicator();
            
            let responseText = 'desculpe, não consegui processar sua mensagem no momento.';
            
            if (data.choices && data.choices[0] && data.choices[0].message) {
                responseText = data.choices[0].message.content;
            }
            
            addMessage(responseText, 'bot');
            
        } catch (error) {
            console.error('erro ao chamar api openrouter:', error);
            
            removeTypingIndicator();
            
            const fallbackResponse = getFallbackResponse(message);
            addMessage(fallbackResponse, 'bot');
        }
    }

    // respostas de fallback quando api não está disponível
    function getFallbackResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('preço') || lowerMessage.includes('orçamento') || lowerMessage.includes('custo')) {
            return 'Para obter um orçamento personalizado, entre em contato conosco através do formulário na seção "Contato". Nossos preços variam conforme o projeto e incluem design, desenvolvimento e suporte.';
        }
        
        if (lowerMessage.includes('serviço') || lowerMessage.includes('o que fazem')) {
            return 'Oferecemos serviços completos de desenvolvimento web: sites responsivos, e-commerce, aplicações web, design personalizado, SEO, e suporte contínuo. Todos os nossos projetos são otimizados para performance e conversão.';
        }
        
        if (lowerMessage.includes('tempo') || lowerMessage.includes('prazo') || lowerMessage.includes('quando')) {
            return 'O prazo varia conforme a complexidade do projeto. Sites simples: 1-2 semanas. E-commerce: 3-4 semanas. Aplicações complexas: 6-8 semanas. Sempre mantemos você informado sobre o progresso.';
        }
        
        if (lowerMessage.includes('contato') || lowerMessage.includes('falar') || lowerMessage.includes('telefone')) {
            return 'Você pode nos contatar através do formulário na seção "Contato" do site, ou clicar no botão "Solicite um orçamento" na hero section. Respondemos em até 24 horas!';
        }
        
        if (lowerMessage.includes('tecnologia') || lowerMessage.includes('linguagem') || lowerMessage.includes('framework')) {
            return 'Utilizamos as tecnologias mais modernas: React, Next.js, Node.js, Python, PHP, WordPress, e muito mais. Sempre escolhemos a melhor stack para seu projeto específico.';
        }
        
        return 'Obrigado pela sua pergunta! Para informações mais detalhadas sobre nossos serviços, preços e prazos, entre em contato conosco através do formulário na seção "Contato". Estamos aqui para ajudar!';
    }
});