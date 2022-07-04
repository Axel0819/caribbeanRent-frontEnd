import logoForm from '../../Assets/Images/logo-form.png'

export const HeadFormCredentials = ({ text }) => {
  return (
    <>
        <img width={106} height={117} src={logoForm} alt="Logo header form" />
        <h3 className="text-xl font-normal">{ text } <span style={{color: "#3B7D7A"}}>Caribbean Rent</span></h3>
    </>
  )
}
