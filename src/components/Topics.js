import Topic from './Topic'

const Topics = ({ topics }) => {
    

    return(
        <>
            {topics.map((topic) =>(
                <Topic key={topic.id} topic={topic} />
                
            ))}
        </>
    )
}


export default Topics
