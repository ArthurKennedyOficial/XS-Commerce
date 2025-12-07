// Slider simples para cases de sucesso
document.addEventListener('DOMContentLoaded', function() {
    // Configuração do slider de cases
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Função para mostrar slide específico
    function showSlide(index) {
        // Remove a classe active de todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove a classe active de todos os dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Adiciona a classe active ao slide e dot correspondentes
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Event listeners para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Event listeners para os botões de navegação
    prevBtn.addEventListener('click', () => {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = totalSlides - 1;
        showSlide(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        let newIndex = currentSlide + 1;
        if (newIndex >= totalSlides) newIndex = 0;
        showSlide(newIndex);
    });

    // Auto-avance do slider (opcional)
    let slideInterval = setInterval(() => {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= totalSlides) nextIndex = 0;
        showSlide(nextIndex);
    }, 5000);

    // Pausar auto-avance quando o mouse estiver sobre o slider
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            let nextIndex = currentSlide + 1;
            if (nextIndex >= totalSlides) nextIndex = 0;
            showSlide(nextIndex);
        }, 5000);
    });

    // Redirecionar para WhatsApp ao clicar nos botões de agendamento
    const whatsappButtons = document.querySelectorAll('.whatsapp-redirect');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Substitua o número de telefone pelo seu número do WhatsApp
            const phoneNumber = '5511999999999'; // Exemplo: 55 (11) 99999-9999
            const message = 'Olá! Gostaria de agendar uma consultoria gratuita com a XS Commerce.';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    });

    // Animações de entrada suave para elementos ao rolar a página
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const elementosParaAnimar = document.querySelectorAll('.servico-card, .passo');
    elementosParaAnimar.forEach(el => observer.observe(el));
});