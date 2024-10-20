import { Card, CardContent } from "./card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-500">
            Copyright <span className="font-bold">Salão.com</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
