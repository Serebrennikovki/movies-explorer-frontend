import './AboutProject.css';

function AboutProject(){
    return(
        <section id='aboutProject' className='aboutProject'>
            <h2 className='aboutProject__title'> О проекте</h2>
            <article className='aboutProject__article'>
                <div className='aboutProject__column'>
                    <h3 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutProject__column'>
                    <h3 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </article>
                <figure className=' aboutProject__progress  aboutProject__progress_type_figure'>
                    <div className='aboutProject__progressBar aboutProject__progressBar_type_backend'>
                        <p className='aboutProject__progressText'>1 неделя</p>
                        
                    </div>
                    <div className='aboutProject__progressBar aboutProject__progressBar_type_frontend'>
                        <p className='aboutProject__progressText'>4 недели</p>
                    </div>
                </figure>
                <div className=' aboutProject__progress  aboutProject__progress_type_figcaption'>
                    <figcaption className='aboutProject__progressTitle aboutProject__progressTitle_type_backend'>Back-end</figcaption>
                    <figcaption className='aboutProject__progressTitle aboutProject__progressTitle_type_frontend'>Front-end</figcaption>
                </div>
        </section>
    )
}

export default AboutProject;