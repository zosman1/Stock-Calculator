import React from "react";
import {
  Segment,
  Grid,
  Divider,
  Input,
  Form,
  Table,
} from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TableCell from "../components/TableCell";
import TotalProfit from "../components/TotalProfit";

export default class ProfitCalc extends React.Component {
  state = {
    initPps: "",
    quantity: "",
    interest: "",
    newPps: "",
    leverage: "",
    initCap: "",
  };

  handleInput(event, name) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { initPps, quantity, newPps, initCap } = this.state;
    //interest to percentage
    const interest = this.state.interest / 100;
    const leverage = this.state.leverage / 100;

    const inputsPresent = !!(
      initPps !== "" &&
      quantity !== "" &&
      newPps !== "" &&
      initCap !== "" &&
      interest !== "" &&
      leverage !== ""
    );

    //output calculations
    const totalBuy = parseInt(initCap) + initCap * leverage;
    const totalMarketValue = initPps * quantity;
    const growth = (newPps - initPps) / initPps;
    const grossp = totalMarketValue * growth;
    const owed = Math.abs(grossp) * interest;
    const netp = grossp - Math.abs(owed);
    const remBuy = totalBuy - initPps * quantity;

    return (
      <Layout title="margin-trade">
        <SEO title="Margin Trade Calculator" />
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Form>
                <h1>Margin Trade Calculator</h1>

                <p>Enter Margin Trade Information Below:</p>
                <Form.Field>
                  <label>Initial Capital:</label>
                  <Input
                    value={this.state.initCap}
                    onChange={event => this.handleInput(event, "initCap")}
                    placeholder="Initial Capital"
                    icon="dollar sign"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Leverage: </label>
                  <Input
                    value={this.state.leverage}
                    onChange={event => this.handleInput(event, "leverage")}
                    placeholder="Leverage"
                    icon="percent"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Interest:</label>
                  <Input
                    value={this.state.interest}
                    onChange={event => this.handleInput(event, "interest")}
                    placeholder="Interest Or Commission"
                    icon="percent"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Stock Price:</label>
                  <Input
                    value={this.state.initPps}
                    onChange={event => this.handleInput(event, "initPps")}
                    placeholder="Price Per Share"
                    icon="dollar sign"
                  />
                </Form.Field>

                <Form.Field>
                  <label>Quantity:</label>
                  <Input
                    value={this.state.quantity}
                    onChange={event => this.handleInput(event, "quantity")}
                    placeholder="Quantity of Shares"
                    icon="sort amount up"
                  />
                </Form.Field>

                <Form.Field>
                  <label>New Stock Price: </label>
                  <Input
                    value={this.state.newPps}
                    onChange={event => this.handleInput(event, "newPps")}
                    placeholder="New PPS"
                    icon="dollar sign"
                  />
                </Form.Field>
              </Form>
            </Grid.Column>

            <Grid.Column>
              {totalMarketValue > totalBuy && (
                <h4
                  style={{
                    color: "red",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  YOUR PURCHASE EXCEEDS BUYING POWER
                </h4>
              )}

              <TotalProfit netp={inputsPresent ? netp : 0} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Table basic="very" celled collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell />
                      <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <TableCell
                    label="Total Buying Power"
                    value={totalBuy}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                  <TableCell
                    label="Total Market Purchase Value"
                    value={totalMarketValue}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                  <TableCell
                    label="Remaining Buying Power"
                    value={remBuy}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                  <TableCell
                    label="Growth"
                    value={growth * 100}
                    inputsPresent={inputsPresent}
                    percent
                  />
                  <TableCell
                    label="Gross Profit"
                    value={grossp}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                  <TableCell
                    label="Amount Owed To Broker"
                    value={owed}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                  <TableCell
                    label="Net Profit After Interest / Commission"
                    value={netp}
                    inputsPresent={inputsPresent}
                    dollarSign
                  />
                </Table>
              </div>
            </Grid.Column>
          </Grid>

          <Divider vertical>yields</Divider>
        </Segment>
      </Layout>
    );
  }
}
