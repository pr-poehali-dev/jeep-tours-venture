import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const tours = [
    {
      id: 1,
      title: 'Экстрим по бездорожью',
      description: 'Адреналиновое путешествие по самым диким местам',
      price: '5 500₽',
      duration: '4 часа',
      difficulty: 'Экстрим'
    },
    {
      id: 2,
      title: 'Горные вершины',
      description: 'Покорение высокогорных троп на джипах',
      price: '7 200₽',
      duration: '6 часов',
      difficulty: 'Сложно'
    },
    {
      id: 3,
      title: 'Лесные тропы',
      description: 'Путешествие через таежные массивы',
      price: '4 000₽',
      duration: '3 часа',
      difficulty: 'Средне'
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      text: 'Невероятные ощущения! Адреналин зашкаливает!',
      rating: 5
    },
    {
      name: 'Мария К.',
      text: 'Профессиональные гиды, безопасность на высоте.',
      rating: 5
    },
    {
      name: 'Дмитрий В.',
      text: 'Лучший способ провести выходные!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-secondary/90">
      {/* Navigation */}
      <nav className="bg-secondary/95 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-white">JEEP TOURS</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="text-white hover:text-primary transition-colors">Туры</a>
              <a href="#gallery" className="text-white hover:text-primary transition-colors">Галерея</a>
              <a href="#booking" className="text-white hover:text-primary transition-colors">Бронирование</a>
              <a href="#reviews" className="text-white hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-primary/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            ЭКСТРИМ
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-8 animate-fade-in">
            БЕЗ ГРАНИЦ
          </h3>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in">
            Почувствуй мощь бездорожья. Покори неприступные вершины. 
            Получи заряд адреналина на всю жизнь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Выбрать тур
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">НАШИ ТУРЫ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выбирай свой уровень адреналина. От спокойных прогулок до экстремальных приключений.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={tour.difficulty === 'Экстрим' ? 'destructive' : tour.difficulty === 'Сложно' ? 'default' : 'secondary'}>
                      {tour.difficulty}
                    </Badge>
                    <span className="text-2xl font-bold text-primary">6500₽</span>
                  </div>
                  <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">
                    {tour.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Долина Привидений, Места съемок кавказской пленницы, Крепость Фуна, Буковый Лес, Смотровая площадка, вершина горы Демерджи</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="MapPin" size={16} className="mr-1" />
                      Маршрут
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section id="booking" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">БРОНИРОВАНИЕ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выбери удобную дату и время для своего приключения
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Календарь туров</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border-0 mx-auto"
                />
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-secondary mb-6">Информация о бронировании</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-secondary mb-2">Выбранная дата:</h4>
                    <p className="text-gray-600">
                      {selectedDate ? selectedDate.toLocaleDateString('ru-RU') : 'Не выбрана'}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-secondary mb-2">Доступное время:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['09:00', '12:00', '15:00', '18:00'].map((time) => (
                        <Badge key={time} variant="outline" className="hover:bg-primary hover:text-white cursor-pointer">
                          {time}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-secondary mb-2">Что включено:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Профессиональный гид
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Снаряжение безопасности
                      </li>
                      <li className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        Страхование участников
                      </li>
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать тур
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">ГАЛЕРЕЯ ПРИКЛЮЧЕНИЙ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Посмотри, какие невероятные места ты сможешь увидеть
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-2xl transition-all duration-300 bg-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-secondary group-hover:text-white opacity-100 group-hover:opacity-100 transition-all duration-300">
                <h4 className="font-bold text-lg mb-2">Горный экстрим</h4>
                <p className="text-sm">Покорение крутых склонов</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-2xl transition-all duration-300 bg-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-secondary group-hover:text-white opacity-100 group-hover:opacity-100 transition-all duration-300">
                <h4 className="font-bold text-lg mb-2">Лесные тропы</h4>
                <p className="text-sm">Приключения в дикой природе</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-2xl transition-all duration-300 bg-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-secondary group-hover:text-white opacity-100 group-hover:opacity-100 transition-all duration-300">
                <h4 className="font-bold text-lg mb-2">Горные вершины</h4>
                <p className="text-sm">Незабываемые панорамы</p>
              </div>
            </div>
            
            {[4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl aspect-square bg-primary/10 hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-secondary group-hover:text-white opacity-100 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-bold text-lg mb-2">Больше приключений</h4>
                  <p className="text-sm">Скоро новые маршруты</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">ОТЗЫВЫ</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Что говорят наши клиенты о джип турах
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <h4 className="font-bold text-secondary">{review.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">ГОТОВ К ПРИКЛЮЧЕНИЮ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжись с нами прямо сейчас и забронируй свой экстремальный тур
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center text-white">
              <Icon name="Phone" size={24} className="mr-3 text-primary" />
              <div>
                <p className="font-semibold">+7 9184459542</p>
                <p className="text-sm opacity-75">Звони круглосуточно</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Icon name="Mail" size={24} className="mr-3 text-primary" />
              <div>
                <p className="font-semibold">Starix_2913@mail.ru</p>
                <p className="text-sm opacity-75">Ответим в течение часа</p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg">
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/90 text-white/75 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Truck" size={24} className="text-primary" />
            <span className="text-lg font-bold text-white">JEEP TOURS</span>
          </div>
          <p className="text-sm">© 2024 Jeep Tours. Все права защищены. Экстрим с гарантией безопасности.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;