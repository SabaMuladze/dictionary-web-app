import { useEffect, useRef, useState } from "react";
const Definitions = ({ data, word, error, setValue, Api, setWord }) => {
    const synonymFunc = (value, event) => {
        Api(value, event)
        setWord(value)
    }

    const audio = data[0]?.phonetics.find(phonetic => phonetic.audio)
    const audioNo = '';
    const audioRef = useRef()
    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }
    return (
        <>
            {word.length > 0 && error == '' ? <div className=" mt-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold flex flex-col md:text-[64px]">
                        {word}
                        <span className=" text-[16px] text-[#A445ED] md:mt-6 md:text-2xl">{data[0].phonetic}</span>
                    </h1>
                    <audio ref={audioRef} src={audio === undefined ? audioNo : audio.audio} >
                    </audio>
                    <svg onClick={playAudio} className="max-md:scale-75 " xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle className="hover:opacity-100" cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path d="M29 27v21l21-10.5z" /></g></svg>
                </div>

                {data[0].meanings.map((mean, index) => {
                    return (
                        <div className="mt-7" key={index}>
                            <div className="flex items-center gap-6 mb-7">
                                <p>{mean.partOfSpeech}</p>
                                <span className="bg-[#E9E9E9] w-[100%] h-[1px]"></span>
                            </div>
                            <p className="text-[#757575]">Meaning</p>
                            <div>
                                {mean.definitions.map(def => {
                                    return (
                                        <div className="flex flex-col" key={def.definition}>
                                            <div className="flex items-center gap-5">
                                                <div className="w-[5px] h-[5px] bg-indigo-800 rounded-full text-transparent">...</div><p className="my-3">{def.definition}</p>
                                            </div>
                                            {def.example ? <p className="my-3 text-[#757575] pl-5">"{def.example}"</p> : null}
                                        </div>
                                    )
                                })}
                                {mean.synonyms.length > 0 ? <p className="text-[#757575]">Synonyms: <span onClick={(e) => synonymFunc(e.target.textContent, event)} className="text-[#A445ED] font-semibold cursor-pointer">{mean.synonyms[0]}</span></p> : null}

                            </div>
                        </div>
                    )
                })}
                <div className="flex flex-col">
                    <span className="w-[100%] h-[1px] bg-[#E9E9E9] mb-6"></span>
                    <p className="underline text-[#757575]">Source</p>
                    <a className=" underline" target="_blank" href={data[0].sourceUrls[0]}>{data[0].sourceUrls[0]}</a>
                </div>

            </div > : null
            }
        </>
    )
}

export default Definitions
