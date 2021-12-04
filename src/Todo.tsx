export const Todo = (props: any) => {
  const { title, userId } = props
  return <p>{`${title}(ユーザー:${userId})`}</p>
}