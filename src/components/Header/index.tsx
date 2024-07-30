import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />/
        <Dialog.Root // precisa ficar em volta de todo o contexto do modal (button e o model)
        > 
        <Dialog.Trigger asChild // asChild: propriedade que vai impedir o Dialog.Trigger de criar um novo button, utilizando o que já existe
        >
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}