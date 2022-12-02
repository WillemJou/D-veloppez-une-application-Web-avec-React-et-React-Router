import DropdownMenu from "./dropdown";

export function Service() {
    return (
      <div className="main-container">
        <DropdownMenu
          title="Service"
          content="
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
      </div>
    )
  }