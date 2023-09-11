const Definitions = ({ data, word, error }) => {
    console.log(data);
    return (
        <>
            {word.length > 0 && error == '' ? <div className=" mt-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold flex flex-col">
                        {word}
                        <span className=" text-[18px] text-[#A445ED]">{data[0].phonetic}</span>
                    </h1>
                    <svg className="max-md:scale-75" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path d="M29 27v21l21-10.5z" /></g></svg>
                </div>

                {data[0].meanings.map(mean => {
                    return (
                        <div className="mt-7" key={mean.partOfSpeech}>
                            <div className="flex items-center gap-6 mb-7">
                                <p>{mean.partOfSpeech}</p>
                                <span className="bg-[#E9E9E9] w-[100%] h-[1px]"></span>
                            </div>
                            <p className="text-[#757575]">Meaning</p>
                            <div>
                                {mean.definitions.map(def => {
                                    return (
                                        <p className="my-3">{def.definition}</p>
                                    )
                                })}
                            </div>


                        </div>
                    )
                })}

            </div> : null}
        </>
    )
}

export default Definitions

{/* <span className=" text-[18px] text-[#A445ED]">{data.map(dat => dat.matches(text))}</span> */ }
