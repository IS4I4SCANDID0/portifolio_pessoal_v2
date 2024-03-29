import { IRepository } from "@/interface/project.interface"

export const getProjectsList = async (): Promise<IRepository[]> => {
  const response: Response = await fetch(
    "https://api.github.com/users/IS4I4SCANDID0/repos?sort=created&direction=desc",
    { next: { revalidate: 24 * 60 * 60 } }
  ); 
  const resJson: IRepository[] = await response.json()
  const updatedRes: IRepository[] = resJson.filter((_: IRepository, index: number) => index !== 5)
  
  return updatedRes 
}