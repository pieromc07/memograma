import React, { useEffect, useState } from 'react'

import { Header } from './components/Header/Header'
import { ModalStart } from './components/Modals/ModalStart/ModalStart'
import { ModalInfo } from './components/Modals/ModalInfo/ModalInfo'
import { Card } from './components/Card/Card'
import { data } from './assets/data/Card'

import './App.css'
const App = () => {

	const [cards, setCards] = useState([])
	const [lifes, setLifes] = useState(3)
	const [reward, setReward] = useState(0)
	const [modalInfo, setModalInfo] = useState({})
	const [firstChoice, setFirstChoice] = useState(null)
	const [secondChoice, setSecondChoice] = useState(null)
	const [restartGame, setRestartGame] = useState(false)



	useEffect(() => {

		if (firstChoice && secondChoice) {
			if (firstChoice.id === secondChoice.id) {
				setCards(before => {
					return before.map(card => {
						if (card.id === firstChoice.id) {
							return { ...card, matched: true }
						} else {
							return card
						}
					})
				})
				setReward(beforeAward => beforeAward + 100)
				handleResetShift()
			}
			else {

				setTimeout(() => {
					setLifes(beforeLife => beforeLife - 1)
					if (lifes === 1) {
						handleModalInfo({
							msg: 'Te has quedado sin vidas.',
							msgButton: 'volver a jugar',
							show: true
						})
					} else {
						handleModalInfo({
							msg: '¡Cuidado!, ese no es el par correcto.',
							msgButton: 'continuar',
							show: true
						})
					}
					handleResetShift()
				}, 1000);
			}
		}

	}, [firstChoice, secondChoice, restartGame])

	const effectFlip = () => {
		setTimeout(() => {
			setCards(before => {
				return before.map(card => {
					return { ...card, matched: true }
				})
			})
		}, 1000);
		setTimeout(() => {
			setCards(before => {
				return before.map(card => {
					return { ...card, matched: false }
				})
			})
		}, 2000);
		setTimeout(() => {
			setCards(before => {
				return before.map(card => {
					return { ...card, matched: true }
				})
			})
		}, 3000);
		setTimeout(() => {
			setCards(before => {
				return before.map(card => {
					return { ...card, matched: false }
				})
			})
		}, 4000);
	}

	const handleLoading = (loading) => {
		if (loading)
			setTimeout(() => {
				document.getElementById('modal-loading').style.display = 'none'
				handleShuffle()
				effectFlip()
			}, 3000);
			
	}

	const handleShuffle = () => {
		const shuffled = [...data, ...data]
			.sort(() => Math.random() - 0.5)
			.map((item) => ({ ...item }))
		setCards(shuffled)
	}

	const handleChoice = (card) => {
		firstChoice ? setSecondChoice(card) : setFirstChoice(card)
	}

	const handleResetShift = () => {
		setFirstChoice(null)
		setSecondChoice(null)
	}


	const handleModalInfo = (modal) => {
		setModalInfo(modal)
	}

	const handleRestartGame = (restart) => {
		if (restart) {
			setRestartGame(false)
			setCards([])
			setLifes(3)
			setReward(0)
			setModalInfo({})
			setFirstChoice(null)
			setSecondChoice(null)
		}
	}
	return (
		<>
			<ModalInfo modalInfo={modalInfo} handleModalInfo={handleModalInfo}
				handleRestartGame={handleRestartGame}
			/>
			<ModalStart handleLoading={handleLoading} show={true} />
			<div className='main'>
				<Header lifes={lifes} reward={reward} />
				<div className='main-container'>
					{
						cards.map((character, index) => (
							<Card
								key={index}
								character={character}
								handleChoice={handleChoice}
								flipped={
									character === firstChoice ||
									character === secondChoice ||
									character.matched
								}
							/>
						))
					}
				</div>
			</div>
		</>
	)
}

export default App