import { quickSearchOptions } from "@/app/_lib/_contants/search"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarImage } from "./avatar"
import { Button } from "./button"
import { Card, CardContent } from "./card"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="imagem salão.com" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-4 border-b border-solid py-5">
              <Avatar>
                <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFRUXGBcXFxcYFxcdFRUXFRUXGBoYFRgYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABIEAABAwIDBAYFCQYEBQUAAAABAAIDBBESITEFBkFREyJhcYGRBzKhsfAUI0JSYnKCwdEVQ1OSosIzY4OyCBY0k/Eko6TS4f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACoRAAICAgIBBAEEAgMAAAAAAAABAhEDIRIxQQQTIlFhBXGBoULxIzIz/9oADAMBAAIRAxEAPwDRIIIL2DxAIwESMIAdZolgphoTlzyTHYtAFIAPFKa2yBU2GgEECUCaDQRAoWQNhoAIAJ1rUgUbGkpqce1NoLSoWWJopzGmyUA6YhwJSeiTwCUI0yeI1gRgJ4RojGkPiNpJYE8WoiwpjoZ6MJGQKfLU2WoE0MlEU8Y0XRJCpjSCeLEgxoChCS5gOoSiggQ18nbyRJ5BPkxAQATvRpTQkacBsRpYYloIDigg1GhdGEx0BBKjiLjZvx2nksl6Qd637PwRxsY+SQEh5JLGAED1csRz4mw7VlPPCDUZPb6XllwwzmrS19mqKQ1h4riLfSDtEG/ygnscyIt8sFh4Lr9LtKNrWdLU9K99rCNjGhziLgMDMyewOJK5M/6jjwpck3fVKzox+gnk6aLRrU60BCIZBxbhJ4HN2f1iOPn3pS2wZcmWPKUeP4ff8/Rlkxwxuk7f9fwCyFkEfxougyQkpohNz17YyBNaLEbNeT8y53ISWAa7sfhvwupvRZX1HMaeYySUkxuDIoajEZUpsJOg9hQdEQqsXBjTWpQS+jyukWQOqJEkLGgEyNueF2i3tSRTOIuGkjmE0HEJ9lU9uQNh3DL81z5PeS+FP9zaPtvtUZbeXe2GkODC6Wb+GLtDe2R5Fm9wBPYFL3T2s6sg6Z8bY7uc0Na/F6pte5aLcVmt5d0dp11c6wjcwtZabJjGRjRrm4i7EDfIXvz5brd7dMUFOIjKZCCXE2sC52thwHYvN9Xn9XKCWBpSvf0vvv8A2dmDDhT/AORa8fkORgvkf1+M0jAszvntFtNJFUguJide2I2c09V7bXt1m3GnbwWrc3lmOB5jgV6PppZfbSzNcvNdf2ceeEOb9taI5YkuCkYUWBdNmPFkZEQpBjQ6IIsODIjmIdGpZiCS6JIOH4IpjQT/AEZQQHFfQ1iRhyWICnG0xSs04jQzSxGU+yBOiEosFjIZjKUyPmpZhSehKLB4yVR0TujJb9I8fqi65lv56Oq+sqHztLC0BrWMLgLNA531LiT4rs9I8YQOFgPYk7QlDW39i8bPjxxyv1M3TSr8JHpYpS4LElo8o7T3SrKc2khdfEG9XrHE42aLDPM5DvHMLsu425rNnxAuDXVTx84/I4L/ALuPkBoSPWPZZW89G81LZjYgEXGYtYZWHMZeICuXsR+merh6rk14f9eGx+swvFSXlf2RTGUWBSrIsK9mzzuCGRCj6FPWR2SsfFDD4A5pY8NcxwIc1wBaQeBByIXLt6t1JaCVs9LLKylc6zmtccUDjoA7XAdAdRob3F+sBqOWkbIx0cjQ5jwWuab5gix0zHeMws8kFLfkuOtHEdv7Ye5gvM955uc5x83cf0UXdv0i1NJIGyvdUQXs5jzeRo/ynnMW+qTh4WGob9Jm6s1BM043yU8l+iedWkaxvtliAtnliGfMDHSwObm5pHeFycqf5NYw1bPU9FURzxMnhdjjkaHNd2ciDoQciOBCXhXFPRJvY+mmbSyG9NM62f7qR2jm/ZJADh234Z916BdOLI2vl2ROKT0RDEFY0uz7NxkZ/RB0aPrHmexFS0uJ7Rw1PcPi3ir57brn9ZlkocYOmy8MFdtGXFa+MuJ5gE8uA8FE2rtcYSSchqrnebZ7pKWdkVhIY3YOWMC7b8rkBef9o7zOnjGuY0PDgRYacVxfpkJRxuEnbTff5NfVZN8khe+e8sdReMcDqef5BdS3Znx0VK+97wQ3Pa2NrTr9pp8l55rT1l6C3LpcGzqRv+Qx/wD3B0n9/sXqwfyo5KtWWSCc6IodCVsIbQRlpCSUAGgmXF3BILXFArHTIjUfoncvagiyS1DAlInGyDTdBoKY1P8ARBNRmykhQ2NIa6FOx03YlNUliiUmVRWxTlszoxr1Q0c8TQfYruaJoGfD4usrTvLtr4eDIcXf1Wtv3/ODyWkr5PZn4ryvVXklwR049Kyp2jICbW8Uul6ze0Zfoo7oxfVPU1hol6T0vs5eaXemy8uVShxHTCCiFN3qS1/BLa4L1uTRx0Mtpu5H8n7lICJzlPJgRuj4pXRFK6VLxhNtgQa7ZUdTG6CZocx3PUFuYc08HA6FcA342I+jllp3Z29V31mGxD/HlwII4Lve1dtspm3wlziDhbe2nFx4D3rkfpE2mKsYn2D2+qRpw6vdb9e/nnCOSab8G0csscWl5OeUDbOA7QvUWw6zp6aGU6vjaSeZAs4+YK8v0kZDge1eiNwqwPpGsBuYxYjsddzf7h4LT/JGCd2bHZ7BmfD8/wBFNUfZ46niSlVElguTNbmdEdRG6ycNF15Z3gjDK6sjb6oqJsPYC8m3tXojaU5cbXXA95oMW0q3gOncfA2OXmFn6NNZnYvUf+aZmq6Piu6+iiu+UbMivmYnPgP4CHN8mSMHguP1tGMOq6L6B6j/ANPVQk+pKx4HH51haT/7TV6TdSTRz43cWjo3RpYhTyC15DoiPZwUcxKbMCTomXNVJksZEKWIwlJD32QA25maCIyI0AOPehE7go90EATQU62VQGOKktCGgTHxOE8yW+ihFU++m2zRUckrTaRxEcX333zH3Wh7vwhTJJIpMG6ld0+1qx2XzUMTG25PeS6/b800ea1VfaxXK/QvUlr6y+ZtBn9Im898+X6ro1VPiXney/ecjZTuCGHJ6mdmo180/Bqul6IRA21vHFR1EcVQejjmaXRyn1A5pAeyS3q6tIdp1s7K4jlBAc0gtObXAgtcObSMiO5ZX0obuGtggwvax0cp6zgSMEjLO01N2M8lm9h7pzUv/T7RmjPFoia6FxPExOkIOmuqFkrsOLOnmoI5pAmJVNs+oqhlUCF/24xIx/jEQ4c9HDuTlZt2ngPXkF+QzI77aeK1jKLVktNF01qjTSE5N0BzPA9gWUo973VVU2CEYIyCS45uNhc9g7loN4Nosghy1INuff8AHJRKXgqKT2c/322+WyPtbKzR3AW8rlx8Vy6vrS91z8forzeeqL3EXPM+Oiy0gsUkqRF8nsm0cpK6r6LtrBlS2Jxyljczvcz5xvsa8fiXK9jxXd8cFp9mVvQyRzD93Ix+WtmOBI8QCPFU1aM2+Mjvb68xSNtmCDcc89e9SausDhcHgqHaldHJKwxPa9pZiu03FibtPiEYlyUKCls35UJndmc1xffuMt2hPn64ieO7oWD3tPkuyuC5d6WtnFkkVUPVc3onHk9hc5t+9rj/ACJe0oT5Ck3KNGNxLc+hSrw7Qniy+dgxD70T2n/aX+S5nJMQb3V7uRtYU20KWod6rZA1/Y2UGNx8GvKucrREIUz0yY+xMyXCmSuAKhVDwqi7KYqJt0ckfNR2T2SjPdXTsViDFyTclKVIa4I8Y5p2wpEA0p7UFYBwQRYUVTIinBD2p1qW2MnQKrJoZZHZOBKMTuSRhKVhQYXJvTftfFUU9M05Rs6Vw+3KcvEMYD+NdaawWJJsALk8gMyfJc5i3cG0KmaV4LS4h73C5LQSGxstewAYwj8Hassr8FRG/RBA4RTzkdWRzGN1z6IPLj3XkAvzBXQHErObow9DTRRDLC0X7XOzcfFxPmr8yJRXkrxSCD87qfTO0Kqy/NPmvjhjfJK7AxjS57jwaO7U8ANSSAMypmtFRJ23nD5O8uIaAL4joLEEXPbp4rn02+7YA4QMa9x+m++EdgAILvMDvWL3u33kr52l12U8brxwg8PryW9aQjwaMhxJpq7aINg0ZX8SeFgFKgvJEpvqJq6rblVUu68zzf6IOGMfgbZvsuqfade5rgxxOWZt7Fpd3Nx9pvPSGAMB06WRrCQR9UAuHiArOr9EdZM50r3wN0+bD33eGgavDcr/AAQnyiieEn2UXo1qC6pkqLdSJhY3kXSW434Na4n7zVO3p24ZXuN7cGgcGjRSdqwGjj6AxiEt0jFrAG/WuCQ6/O+d+9YXalZmeSI/IJviuKIVRPixE+Xx3qoqpOtYJ6WTVQHHNEnRWOJc7NlLRl8WQnqbG3j71Ho5bCybqD17rS9GfG5OzX7q7xGnkbjJMeh1JaOYHLs8l1+jqGvY17SHNcLtcDcEcwV51bPYLSbqb2S0jsuvE43fETkdLuYfoP7dDxBysJgrXZ21VW8dMyWmmjlF2Fji7mMDS4OHaCLjuT2ydrxVMYlhdiboRo5juLXt4H2EZi4VZvjV4KOpcP4MgH424P71pJporycFleOKLUJuXVLYLXXNezatHp7dLaJqaGmnvcvibiPN7Bgf/Uw+asJIzzWF9BtY6TZ7otehmcB2Nka14/qxroL4HLXHLSIktkJ47UIozfVP/JXHgno6YjVaOSIoNlNdOfIAn4eClNWMptFqKZVGhKCtUaXusfBDLKUck8IAjDk5GVi5Mqhl1OmH0fFWVkRYhZGhuJk985hDSP0BkIjHc7N/9DX+YTm72yDBSm4tLIHSOvqCW9Vuelmhotzxc0W8MQmrqKnIu0dNO8cCIwwNv+Jw8Lq/rAcDz9l3+0o5bsVHN4YTEWtOWQ8uHuVkJbhSN4aa8cMo4tAPc4Bwt2XcfNU8U1l0YnaIna6JE0tly/0n7xOlk+Rsd83EQZLfSltoexgNrfWLuQt0rFic0cLj3rz+2OWpnLWNL5ZXmwGrnOcSe4am50CWSSVBjTJewdjzVk7YIG4nnMk5NY0Wu97votF9e0AXJAXoDcv0bU9DhlJ6eo16Vw6seX7lv0fvHrd2iY3O3ci2fTdGyzpHAOmk4veBoD9RtyAO86krokQyA7B7li5PsukNxMIT2JKNklTdj6OJelzaJdWOGojaxg7fpG/4nHyXMKx5OZW19IEgfWVB5yv82nD46LDzA2J4LeH/AFOaW5kCU9qZe3JKldmjIuFL2brQ7SuWi2FsLp2lzri5LW2+yBd2eouf6Ss9SjVdq3Q2JZ9NTEcCHkc8DnvPdiJRK+JNfI5RX7Dlic9paH4Ta7L+BwnNVbctCuk75wOoNtgPuKeV0JFz826NzGRvJvldrg4nw5pG++6+PFLDHhmGbmNH+KBkbNGXSC3D1s9Ta6U/sbiZTd3b8lLKJGE2NhIzhIy+neM7HgewkHcb4bdZJQyGM4hI1oHc6Rt7jgRYgjsK5ZG/inp5HYcNzhve3C/ctbdEVTIjxmjk0RoEKaNLOp/8Ou0A2rqKc/vYmvHa6F2nfaRx8Cu+uhC8j7kbY+RV9PUXs1sgD87fNv6r79mFxPgvXq55WmaLZGdHZMSKe4Jrok1ITRXtYeSfjaVLESU1ip5LJUSNgKCl2QUciqIuBGMkx010sEq6JJTXJV1FDkfSKOJVlXStL9ozyfRigiiHLFI58j/Gwj9isNtTYKeZ/FschHg0qDsZv+NJaxknkPeI7QNPi2EHxTe8xJgLPrua092bz54LeKOIWVFM7Hs+L7LWtN/8smM3/lWcdkt9Q7JtSdGRhJDjb6uJxdb2rD18ZaSDqNVcX5JaExOz1ULZewKane6SGJrHOvd13E2OobiJwjsFk+140vmn+lAH6py2JaLmKTEA3nZvmbLZOOaw+746SaNvDFiP4Ot7wPNbpwU2UE1ycamQEcsmBrnk2DQSTyAF7+xJgebN6Z7z1BOpml8hI7PyWUqpFcbSdliPrH1u85k+/wA1QTldHSOWO2RJNUtx0TbhmnANFmvJ1MvtzaLpamNp9Vt5HdzMx5vLR4rvu48OKd0p+gy34pHe+zXea476N6UF0z+QYwdmIucf9oXetyqLBTBx1kcX+Hqt9gv4qp6j+5nHciZvFu/S18YiqoRK0HE25cHNPNrmkEeeayW+2y2wujewENdi43sRbie/3robVQ77UfSUrnDWMh/ho72G/guezVrRwPfTd4EOqohZw60rRo4cZG8nDVw45nW98Q55K69VP4LnG8+yPk7w5o+bffD9hw1Z+Y7O5bx0jLspXGyVHmE2/Oyn0lIejMnAG3bqP/t7FS7HJ0iFLGvXO41eajZ1JM71nQx4u1waGk+YK8kS6+K9M+hOpL9j09zfA6VngJXEDwBAWWRFwejdoIroErIsNJuiLkhzk0hNjuJEo9ygnxFY1HZOByjtnHMeaca8LRiHCUGkDM8M026Qc0HyNLSL5EFIBvZkZZDE12bhGwOPN2EYj53TFazpJ4I/ojHI78AAA83pxlY08UxNXBso59GfAYx78v5UmmkCZK2ttIRgjjZc/wBty4iHDUk38f8Ax7VP25X4y4krM1FaOJtbNa0oxohu3YRfxSX1d+Kr5q6+mSm7u0TZ5omP9QvGMc2g3IPYQLLOhWbn0f0JLTUuvZwwx34tuC5w5gkAA9h5rYInSAAAWAGg4DuTbZweKlJmg5dVm9z7UFXY2Pyeax7ejcp8kgWf38rRHs6odriZ0Y0/eODM/MptBZ5yrzckcsrd3JVM7Va1JwnP4v8ABVVUvuV0Po5sfZFIT8IzUfFmpcAyvn+qiJtPo6L6M6clhaBbpZQ0HjlhYCO4ly9BxNDGhrcg0Bo7ABYe5cs3E2Z8nNJG4AFt3OPDEWucf6iumSThPMtpfgnE9N/kkY0TwHAtcLgixHAg5EJtsgQZKFhRrZyHb2zjTzuiffLNp+sw6O8sj2gqrraBlRG6Jw6rhrxDho5vaPaLjiut72bDZWRWyErLmN54E6tNvomw7sjwXI6gyQSGN7SxzbXaeXMHRw7RkrT0ZtUzl21NnSU8zoZPWadRo5pzDm9hFj4rXbkUzJqeeJx+np2SMtfzjSt+aIyhk7R1mNwuA1cy9wR90k+DuxQ/R7MBJMCci1ndk4/qVtgpTSkTmdwbRmK2ndG4seLOabEdoXdv+HTaAdSVMFzeOYPtybKwAW/FG5cp3/a35QHN+nGC77wJbfxACuvQbtz5PtFsRPUqGmI8sY68Z77gt/GsssabRpilyimeky5DGmsYSHPHNZ0UOlySXJsuHNJ6ZvNVxEO40E30jeaCdBaObftKX659icZtab+IfZ+igXRgrK2MsxtabjJ7B+iU7aU2nSH2foqq6dbLwRYExtS/XG6/epmzZyXSOcScm6n75VU1/NEyotjIJAGR7bAH+6yuG2D6IO2aw3t4rNy1BJ0yvbt71Kr6jE43OQVS6oxEjgdPJat2znbJjXC9tCOHx3rT7vx2u4ZYcr9pz93vWZpYwO3t5raUUPRsDeOp7z8W8FD6LgrZZfLH2tjKDKp4zDyPFQgUouUbNyc6ukOrz7FA3+mLtjSXdnjjP/zGi3klB5VPv7KTs17eGNl+wYnnLtxBvmU47ZMtI5vUUxEOIjUA+B0WbmOa6NtamPyYNwgEN8fVzvztf2LCVcQt2rftHPGoyorXLS7iQtfVxiS2BuKSx0JYOqP5iD3ArNBtytFuiB8qb92Twswm/aMlONbNcjpHZaGoxvc4G4aAOy7sz/t9qmmof9Y+ardlxYIW83dY+OnsspFypyzcpDxxqJM+XSWtjckxVj26OIUWyQSszQsP2rL9cqPPAyqa6OUXcc2O4sdzHbp3gG6jPKDXltiNRmEWJpGVmpHWfGcpG3Fu0fHuVPBG2F3Vbm89awtc/BK2298AwsrYhoAJG9l7Z+ZF+xpWJ27VkgPjGJrj25H/APfYVrB7ObJHTRnd7iXStvl1bW5dYn23VVsCoMdTA9uRbLG4eDwpO13kvDjra1u7T3+xQXtFhbX81U1ydl4nxikejpduSsJAcDYkZjkbcEx+3pdbjyP6qg2VtH5RTxTcXtBd98Etf/U1ykLnbaZqWjtuS8x7f1SP21LzCrCU05ydsRbnbsnZ5lBUxQT2TY4w2TgTbcynAVDKQd0LokaRQsG5RVVC6KEvcSHOcSR95xt5BoHgiabLJ77bYrCZI2AloDSHNa4vDSy7iSMhY4s7K4PZMuirr3STVLaaAjEes8nQAC9jyAAue9qvdubudBTioY5zmtIEl7ZBxw422GQDrAjP1geBvWei2iLumqSMgBE08bkh7z5Bg/F3rXbx1JFJM0HJzcBvoBI4MJ8iqct6J4KtlRu3CHlp4Nz8Rp7bFaovXPPRZXlzpITnhZjHcHtb/cF0NjAlJrwVBNKg2yeKWU25jTqEMFlFlDjO9VO9jQ6nY06GeK/cGyu/tVqwcFTb4PwwxnUCph0+liEjLD+cqkwl0R99JRDTfae4MHPRxJ9ntXLKx+VltfShtAGeJgIIEbnADm+VwvfTSMeXam90tzmytZVVDrtPWbENCOBkPI5HCOGutlvySiYcW52YWBuZWo3JpsdQR9kNvyxOFz5NK0W/FDAKfEGtDg5gYRbq3dYjutfLu5Kt3CmDZJAbYte2wFsvFx80RlqxTVujpAI4INeq1tWc7NJ7UHGS40tyzXO5HRZZF/YozoWnUu/nePcbJs4xxHgg+BxzxEe7y0SsBb4AcjcjtJPvRRRgCwvbvP5pt9M4kHpHZcrW8rJn9nC5OJxPDP8ANAiyiIdeM2LX3BB43GY8lzSbFDWzUMgs25LDzFsbSOwt9y3wpGZON7jMHEQQRxGeSw++DMc7XAkyYxgPEhjDi7SLAeQVRZMlfZnd5YQ0gjVtwe3Qgo9ubuOpo2TYw9r7XA1ZcAgngQb2vz700xplq2QvOWNmPhkAC7xsCF0yGpgAsC21rYLEm3LCQSRbvVyn9EwVLZC3GkBoYQHZgyXHI9K8+4g+KvC7JZ2D5PESIWWaSXWzs0kC+EOzaMtBkpc1RHg1JceGZIJ8Vm1srkWbCOKSclT1VZYANjlc4jM2IHnndV3TSG9rj7Lxne3AXFs0xNmhNQz+I3+Zv6ollnirv/hH+Zo9hBsjRaFs1xKU11klpsnAeJSKFNISwBkkXFvcjZcpDHWjtVZXMqWytlp3QABuFwl6TPrX6vRgkHxU62iKSIHI5jkkMoaneaSneWSxjCSSXMe54vxtjY0jTkVH2zvNT1FNJAMTXyNwsuOqTiaQ4OB7NDZXkmyIXDrxsd3i+R702dgU2nQRZc2A+V07Axe6Oz5qaR1Q18VmsIc047PacyL2AHqixvqtNT7/ANKRd4lY76uEO8iDmPJWMexIOMMR/wBNqcdsmC2UMX/bb7E00LYij3rpZW3xlh+q9jw7wsCD5o63brLFsbhi5mwt4E3RHZUQH+FEf9JmXsRnZcf8KIdvRsH9qfxFchFLUzG2J+LL6oF+F+q0clV747YERpC+zmtmErmAi56NpDT4Fx14qxn3dikbYucBybhAOmtmqM3c+ktnET+N/nkQEtDVmHq6+GsqzJITHEGta1t8yGgZE2NrnEfFdFoZIhG20gDSODhhtprooUW6dI0ZQtv25+d8kp+68Lh1WNbzwsjB93xdO0G/BQekR8PQsZG9peXhzg1wN2hrhd1ibZkZcbnks1uftdtNVRySk9HZzXanCHNIDrcbGx8Ft59y6d2bpJfAxg2/kSW7iUoOshHa5t7+DR7ka6Gv2Ll29FIcmzxuvyNrX+9biiqt4Imava7kGuBdryB7Cq1u59ONAbjmTn7VLi3ZiAt1r8w45d10VH7Jbl4Qb97YsiBIToWhhv33Nhw0uiO2ycUlsMQAsesX3PNtrAeJTjd3IL369uWI5+Nr/wDkof8ALVK6+KMn/Uly48HhFQF8/JTxbwuuSZSI9eGIW4XBulR74RX6xeANDqTkeFyfjgrX9gU+Vo/63n/c4oP2BT/RZbuLuf6FHxBKRUR79MA/6aWTPLE9gy8Q6yp6neNxkMsVOcRFruc0AC2nVzI1yuPatY7YEGZLLk8XZ+/vRjYVOP3LD4a+2yPiHyOc0cjhUOnlzLsRNr5F3LPQaaq+pdtxi5cXA92o1GhPPsWsg2XStPXp4zlkMA15kXF/alNpI9BGwN5YWgW7gFXKImmzIv3gb9Fh8SB7rpz/AJku23RgW5uJ/ILSfs6HhFHe/wBRufsSzsanDc4YydfVv5I5Q+ieMvsoYt6mgWcwk9lre3RK/wCaov4bvNiuP2bCD/hM/lHxwTjYGAWDGDua0W8glyh9DqX2QY94gRf5PUG/EMbbwQVtCw2FrWQRcStjYKW3Tz/JBBZIY7GOqe/9Ebz8eSCCpdDEg/Hilt9S6CCBIN56gRXyagggoJurk636PggggAyM/L80soIJDQlyNBBADfFOwH48kEEMEOytFhlwHvKT9H45oIJIpjcQzPxwRk/HiEEE2SHwCbZp5fkgggBfP45KO45ju/RBBCCQtyiMOfxyQQTJfQAc/FByCClCHD8exJkOngggmMbBSG+t4fmUEEhCi480EEFQH//Z" />
              </Avatar>

              <div>
                <p className="font-bold">José Valderez</p>
                <p className="text-xs">test@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/">
                    <HomeIcon size={18} />
                    Início
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamento
              </Button>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Image
                    alt={option.title}
                    src={option.imageUrl}
                    height={18}
                    width={18}
                  />
                  {option.title}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-2 py-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
