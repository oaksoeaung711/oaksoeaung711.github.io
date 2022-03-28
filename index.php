<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>

<body>
    <?php
    // echo "hello";
    // $x = 1;
    // $y = 3.2;
    // $z = [$x,$y];
    // $obj = new stdClass();
    // $obj -> name = "susan";
    // echo $obj -> name;
    // // echo print_r($z);
    // function add ($num1,$num2){
    //     return $num1 + $num2;
    // }
    // echo add(3,2);

    // $pocketMoney = 5000;
    // $snack = 500;
    // $phone = 2000;

    // if ($pocketMoney > $phone) {
    //     echo "I can buy the phone";
    // } elseif ($pocketMoney > $snack) {
    //     echo "I can buy the snack";
    // } else {
    //     echo "I cannot buy";
    // }

    $x = 1;
    $thingsToBuy = ["phone", "snacks", "car", "plane"];

    // for ($x; $x<3; $x++) {
    //     echo $thingsToBuy[$x];
    //     echo " ";
    // }

    for ($x; $x < 101; $x++) {
        if ($x % 15 == 0) {
            echo "fizzbuzz";
        } elseif ($x % 3 == 0) {
            echo "fizz";
        } elseif ($x % 5 == 0) {
            echo "buzz";
        } else {
            echo $x;
        }
        // echo $x;
        echo "  ";
    }

    ?>

    <h1><?php echo $x ?></h1>
</body>

</html>