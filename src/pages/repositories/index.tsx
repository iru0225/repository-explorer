import { useEffect, useState } from "react"
import TextComponent from "../../components/atoms/text"
import CardComponent from "../../components/molecules/card"
import SearchComponent from "../../components/molecules/search"
import Accordion from "../../components/organisms/accordion"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { reposAction, reposSelector } from "../../redux/repositories.slice"
import { UserType } from "../../types"
import { Container, ContentWrapper } from "./styled"

const Repositories = () => {
  const reposData = useAppSelector(reposSelector)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')  

  useEffect(() => {
    if (reposData.users.length < 1) {
      dispatch(reposAction.fetchAllUsers())
    }
  }, [dispatch, reposData])
  
  
  const onChange = (event: React.ChangeEvent) => {
    const {value} = event.target as HTMLInputElement

    setValue(() => value)
  }

  const onClick = () => {
    const filterUser = reposData.users.filter((user: UserType) => user.login.includes(value))
    dispatch(reposAction.setSearch(value))
    filterUser.forEach((user: UserType) => {
      dispatch(reposAction.fetchRepos({ user: user.login}))
    })
  }

  return(
    <Container>
      <SearchComponent
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      <ContentWrapper>
        {
          reposData.search && <TextComponent
          label={`Showing users for "${reposData.search}"`}
          variant='grey'
        />
        }
        {
          Object.keys(reposData.repositories).map((key) => (
            <Accordion key={key} label={key}>
              {
              reposData.repositories[key].map((data: any) => (
                  <CardComponent
                    key={data.id}
                    title={data.name}
                    description={data.description}
                    star={data.stargazers_count}
                  />
                ))
              }
            </Accordion>
          ))
        } {
          reposData.repositories.length < 1 && (
            <TextComponent
              label='Not Found'
              variant='bold'
            />
          )
        }
      </ContentWrapper>
    </Container>
  )
}

export default Repositories