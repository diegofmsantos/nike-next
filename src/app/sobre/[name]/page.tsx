type Props = {
    params: {
        name: string
    }
}

export const Page = ({ params }: Props) => {

    return (
        <div>
            Página dinâmica {params.name}
        </div>
    )
}

export default Page;