import React, { Component } from 'react'
import A from './A'
import Div from './Div'
import H1 from './H1'
import MyButton from './MyButton'
import P from './P'

export default class App extends Component {

    render () {
        return (
            <Div>
                <H1>"Введение в React"</H1>
                <P>"React - это библиотека JavaScript, которая используется для создания пользовательского интерфейса. React был создан компанией Facebook, а первый релиз библиотеки увидел свет в марте 2013 года.[...]"</P>
                <P>"Первоначально React предназначался для веба, для создания веб-сайтов, однако позже появилась платформа React Native, которая уже предназначалась для мобильных устройств."</P>
                <P>"React представляется идеальный инструмент для создания масштабируемых веб-приложений (в данном случае речь идет о фронтенде), особенно в тех ситуациях, когда приложение представляет SPA (одностраничное приложение)."</P>
                <P>"React относительно прост в освоении, имеет понятный и лаконичный синтаксис."</P>
                <H1>"Виртуальный DOM"</H1>
                <P>"Вся структура веб-страницы может быть представлена с помощью DOM (Document Object Model)- организация элементов html, которыми мы можем манипулировать, изменять, удалять или добавлять новые. Для взаимодействия с DOM применяется язык JavaScript. Однако когда мы пытаемся манипулировать html-элементами с помощью JavaScript, то мы можем столкнуться со снижением производительности, особенно при изменении большого количества элементов. А операции над элементами могут занять некоторое время, что неизбежно скажется на пользовательском опыте. Однако если бы мы работали из кода js с объектами JavaScript, то операции производились бы быстрее."</P>
                <P>"Для решения проблемы производительности как раз и появилась концепция виртуального DOM."</P>
                <P>"Виртуальный DOM представляет легковесную копию обычного DOM. И отличительной особенностью React является то, что данная библиотека работает именно с виртуальным DOM, а не обычным."</P>
                <P>"Если приложению нужно узнать информацию о состоянии элементов, то происходит обращение к виртуальному DOM."</P>
                <P>"Если необходимо изменить элементы веб-страницы, то изменения вначале вносятся в виртуальный DOM. Потом новое состояние виртуального DOM сравнивается с текущим состоянием. И если эти состояния различаются, то React находит минимальное количество манипуляций, которые необходимы до обновления реального DOM до нового состояния и производит их."</P>
                <P>"В итоге такая схема взаимодействия с элементами веб-страницы работает гораздо быстрее и эффективнее, чем если бы мы работали из JavaScript с DOM напрямую."</P>
                <H1>"Другие особенности React"</H1>
                <P>"Другой отличительной чертой библиотеки является концентрация на компонентах - мы можем создать отдельные компоненты и затем их легко переносить из проекта в проект."</P>
                <P>"Еще одна особенность React - использование JSX. JSX представляет комбинацию кода JavaScript и XML и предоставляет простой и интуитивно понятный способ для определения кода визуального интерфейса."</P>
                <H1>"Мой пример работы React с button:"</H1>
                <MyButton msg = "Алярм" />
                <P><A href="https://metanit.com/web/react/1.1.php">"Источник статьи"</A></P>
            </Div>
    )
    }

}