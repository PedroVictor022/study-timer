import { HistoryContainer, HistoryList, Status } from "./style";

export function History() {
   return (
      <HistoryContainer>
         <h1>Meu histórico</h1>
         
         <HistoryList>
            <table>
               <thead>
                  <tr>
                     <th>Tarefa</th>
                     <th>Duração</th>
                     <th>Inicio</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Estudar</td>
                     <td>20 Minutos</td>
                     <td>Há 2 meses</td>
                     <td>
                        <Status statusColor="green">Concluído</Status>
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td>Estudar</td>
                     <td>20 Minutos</td>
                     <td>Há 2 meses</td>
                     <td>
                        <Status statusColor="green">Concluído</Status>
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td>Estudar</td>
                     <td>20 Minutos</td>
                     <td>Há 2 meses</td>
                     <td>
                        <Status statusColor="green">Concluído</Status>
                     </td>
                  </tr>
               </tbody>
               <tbody>
                  <tr>
                     <td>Estudar</td>
                     <td>20 Minutos</td>
                     <td>Há 2 meses</td>
                     <td>
                        <Status statusColor="green">Concluído</Status>
                     </td>
                  </tr>
               </tbody>
            </table> 
         </HistoryList>
      </HistoryContainer>
   )
}