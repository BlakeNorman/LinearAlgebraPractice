export default function TopicCheckbox({ topic, selected, setSelected }) {
    return (
        <div>
            <label className="topic-checkbox">
                <input
                    type="checkbox"
                    checked={selected.includes(topic)}
                    onChange={() => {
                        if (selected.includes(topic)) {
                            setSelected(selected.filter(item => item !== topic));
                        } else {
                            setSelected([...selected, topic]);
                        }
                    }}
                />
                <span>{topic}</span>
            </label>
        </div>
    )
}